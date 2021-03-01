import React, { useState, useCallback, useEffect } from "react";
import { Modal } from "../../components/Modal";
import {
  Button,
  FormInput,
  Labels,
  Row,
  Switch,
  CircleSpinner
} from "../../components";
import {
  buttonStyle,
  projectModalFormInputStyle,
  buttonRowStyle,
  colorPaletteRowStyle,
  addFavouriteRowStyle
} from "./style";
import { ProjectColorsType } from "../../models";
import { ColorPalette, CurrentColor } from "./Color";
import { useProjectsApiActions } from "../../hooks";
import { ModalHeader } from "./ModalUtils";

export interface ProjectModalProps {
  children?: React.ReactNode;
  headerText?: string;
  project?: {
    title?: string;
    color?: string;
    isFavourite?: boolean;
  };
  colors?: ProjectColorsType[];
  handleCancel?: () => void;
  action?: string;
  error?: string;
  isRequesting?: boolean;
  projectId?: string;
}

export const initialProjectState = {
  title: "",
  isFavourite: false,
  color: "#8D8D8D"
};

export const ProjectModal = (props: ProjectModalProps) => {
  const [currentProject, setProject] = useState(initialProjectState);
  const [colorPaletteIsVisible, showColorPalette] = useState(false);

  const { project, editProject, addProject } = useProjectsApiActions();

  const projectActions = {
    edit: useCallback(() => {
      editProject(props.projectId, currentProject);
    }, [props.projectId, JSON.stringify(currentProject)]),
    add: useCallback(() => {
      addProject(currentProject);
    }, [JSON.stringify(currentProject)])
  };

  const {
    actions: {
      editProject: { isRequesting, error }
    }
  } = project;

  useEffect(() => {
    if (JSON.stringify(currentProject) !== JSON.stringify(props.project)) {
      setProject(prevState => ({
        ...prevState,
        ...props.project
      }));
    }
  }, [JSON.stringify(props.project)]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): any => {
      const target = event.currentTarget;
      const value =
        target.type === "checkbox" ? target.checked : (target.value as any);
      const name = target.name;

      setProject(prevState => ({
        ...prevState,
        [name]: value
      }));
    },
    [JSON.stringify(currentProject)]
  );

  return (
    <>
      <Modal onClose={props.handleCancel}>
        <ModalHeader>{props.headerText}</ModalHeader>
        <FormInput
          onChange={handleChange}
          value={currentProject.title}
          type="text"
          style={projectModalFormInputStyle}
          name="title"
        />
        <Row style={colorPaletteRowStyle}>
          <Labels text="Select project color" />
        </Row>
        <Row
          style={{ ...colorPaletteRowStyle, justifyContent: "space-around" }}
        >
          <ColorPalette
            colors={props.colors}
            color={currentProject.color}
            handleClick={color => {
              setProject(prevState => ({
                ...prevState,
                color
              }));
            }}
          />
          <CurrentColor
            handleClick={() => {
              showColorPalette(!colorPaletteIsVisible);
            }}
            color={currentProject.color}
          />
        </Row>
        <Row style={colorPaletteRowStyle}>
          <Labels text="Add as Favourite" />
        </Row>
        <Row style={addFavouriteRowStyle}>
          <Switch
            name="isFavourite"
            handleChange={handleChange}
            checked={currentProject.isFavourite}
          />
        </Row>
        {props.children}
        <Row style={buttonRowStyle}>
          <Button
            text="cancel"
            style={{ ...buttonStyle, marginRight: "3px" }}
            onClick={props.handleCancel}
          />
          <Button
            style={{ ...buttonStyle, marginLeft: "3px" }}
            onClick={() => {
              projectActions[props.action]();
            }}
            disabled={currentProject.title ? false : true}
          >
            {isRequesting ? <CircleSpinner height={10} /> : "Save"}
          </Button>
        </Row>
      </Modal>
    </>
  );
};

import { useState, useCallback, useEffect, useRef } from "react";
import { Modal } from "../Modal";
import { Button, FormInput, Labels, Row, Switch } from "../SharedComponents";
import {
  buttonStyle,
  projectModalFormInputStyle,
  buttonRowStyle,
  colorPaletteRowStyle,
  addFavouriteRowStyle
} from "./style";
import { ProjectColorsType } from "../../models";
import { ColorPalette, CurrentColor } from "./Color";

export interface ModalHeaderProps {
  children?: React.ReactNode;
}

export const ModalHeader = (props: ModalHeaderProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          width: 100%;
          background-color: #ededed;
          color: #767676;
          font-size: 20px;
        }
      `}
    </style>
  </>
);

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
}

export const initialProjectState = {
  title: "",
  isFavourite: false,
  color: ""
};

export const ProjectModal = (props: ProjectModalProps) => {
  const [project, setProject] = useState(initialProjectState);
  const [colorPaletteIsVisible, showColorPalette] = useState(false);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (JSON.stringify(project) !== JSON.stringify(props.project)) {
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

      if (name === "title") {
        setProject(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
      if (name === "addFavourite") {
        setChecked(!isChecked);
      }
    },
    [JSON.stringify(project), isChecked]
  );

  return (
    <>
      <Modal onClose={props.handleCancel}>
        <ModalHeader>{props.headerText}</ModalHeader>
        <FormInput
          onChange={handleChange}
          value={props.project.title}
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
            color={project.color}
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
            color={project.color}
          />
        </Row>
        <Row style={colorPaletteRowStyle}>
          <Labels text="Add as Favourite" />
        </Row>
        <Row style={addFavouriteRowStyle}>
          <Switch
            name="addFavourite"
            handleChange={handleChange}
            checked={isChecked}
          />
        </Row>
        {props.children}
        <Row style={buttonRowStyle}>
          <Button
            text="cancel"
            style={{ ...buttonStyle, marginRight: "3px" }}
            onClick={props.handleCancel}
          />
          <Button text="save" style={{ ...buttonStyle, marginLeft: "3px" }} />
        </Row>
      </Modal>
    </>
  );
};

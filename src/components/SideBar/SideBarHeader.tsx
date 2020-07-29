import { useState, useEffect, useCallback } from "react";

import Add from "react-ionicons/lib/IosAdd";
import ArrowDown from "react-ionicons/lib/IosArrowDown";
import ArrowForward from "react-ionicons/lib/IosArrowForward";

import { Button, Text } from "../SharedComponents";
import { Modal } from "../Modal";
import { FormInput } from "../SharedComponents/FormInput";
import { useProjectsApiActions } from "../../hooks";
import {
  sidebarHeaderButtonHoverStyle,
  sidebarHeaderButtonStyle,
  sidebarProjectTextStyle,
  buttonStyle,
  formInputStyle
} from "./style";
import { addProject } from "../../actions";

export interface SideBarHeaderProps {
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
  openProjectList?: boolean;
}
export const SideBarHeader = (props: SideBarHeaderProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { project, addProject } = useProjectsApiActions();

  const {
    actions: {
      addProject: { isRequesting, error }
    }
  } = project;
  useEffect(() => {}, [JSON.stringify(project.projects)]);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.currentTarget;
      const value = target.value;
      setTitle(value);
    },
    [title]
  );

  const handleSubmit = useCallback(() => {
    addProject({
      title
    });
  }, [title]);
  return (
    <>
      <header>
        <Button
          style={sidebarHeaderButtonStyle}
          hoverStyle={sidebarHeaderButtonHoverStyle}
          onClick={props.onClick}
        >
          {props.openProjectList && <ArrowDown fontSize="20px" />}
          {!props.openProjectList && <ArrowForward fontSize="20px" />}
          <Text text="Projects" style={sidebarProjectTextStyle} />
        </Button>
        <Add fontSize="30px" onClick={() => setModalOpen(true)} />
        {isModalOpen && (
          <AddProjectModal
            headerText="Add project"
            onClick={() => setModalOpen(false)}
            handleSubmit={handleSubmit}
          >
            <FormInput
              type="text"
              style={formInputStyle}
              name="title"
              error={error}
              onChange={handleChange}
              placeholder="Project Title"
            />
          </AddProjectModal>
        )}
      </header>
      <style jsx>{`
         {
          border-bottom: 1px solid #e1e1e1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

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
          background-color: #ededed;
          color: #767676;
          font-size: 20px;
        }
      `}
    </style>
  </>
);

export interface RowProps {
  children?: React.ReactNode;
}
export const Row = (props: RowProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          display: flex;
          align-self: center;
          width: 80%;
          justify-content: space-between;
          padding: 15px;
        }
      `}
    </style>
  </>
);

export interface AddProjectModalProps {
  children?: React.ReactNode;
  headerText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleSubmit?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const AddProjectModal = (props: AddProjectModalProps) => (
  <>
    <Modal onClose={props.onClick}>
      <ModalHeader>{props.headerText}</ModalHeader>
      {props.children}
      <Row>
        <Button text="add" onClick={props.handleSubmit} style={buttonStyle} />
        <Button text="cancel" style={buttonStyle} onClick={props.onClick} />
      </Row>
    </Modal>
  </>
);

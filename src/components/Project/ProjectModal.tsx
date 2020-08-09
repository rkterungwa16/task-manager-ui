import { useState, useCallback, useEffect, useRef } from "react";
import { Modal } from "../Modal";
import { Button, FormInput } from "../SharedComponents";
import { buttonStyle, projectModalFormInputStyle } from "./style";

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

export interface ProjectModalProps {
  children?: React.ReactNode;
  headerText?: string;
  project?: {
    title?: string;
    color?: string;
    isFavourite?: boolean;
  };
  handleCancel?: () => void;
}

export const initialProjectState = {
  title: "",
  isFavourite: false,
  color: ""
}

export const ProjectModal = (props: ProjectModalProps) => {
  const [project, setProject] = useState(initialProjectState);

  useEffect(() => {
    if (JSON.stringify(project) !== JSON.stringify(props.project)) {
      setProject(prevState => ({
        ...prevState,
        ...props.project
      }))
    }
  }, [JSON.stringify(props.project)])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): any => {
      const target = event.currentTarget;
      const value = target.type === 'checkbox' ? target.checked : target.value as any;
      const name = target.name;

      if (name === 'title') {
        setProject(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    }
  ,[JSON.stringify(project)]);

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
        {props.children}
        <Row>
          <Button text="add" style={buttonStyle} />
          <Button text="cancel" style={buttonStyle} onClick={props.handleCancel} />
        </Row>
      </Modal>
    </>
  );
};

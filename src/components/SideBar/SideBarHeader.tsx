import { useState, useEffect, useCallback } from "react";

import Add from "react-ionicons/lib/IosAdd";
import ArrowDown from "react-ionicons/lib/IosArrowDown";
import ArrowForward from "react-ionicons/lib/IosArrowForward";
import TodayIcon from "react-ionicons/lib/IosAlarmOutline";
import OverduceIcon from "react-ionicons/lib/IosCalendarOutline";
import ProjectsIcon from "react-ionicons/lib/IosList";

import { Button } from "../SharedComponents";
import { Modal } from "../Modal";
import { FormInput, CircleSpinner } from "../SharedComponents";
import { useProjectsApiActions } from "../../hooks";
import {
  buttonStyle,
  formInputStyle
} from "./style";

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
  useEffect(() => { }, [JSON.stringify(project.projects)]);
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
        <LinkWrapper>
          <TodayIcon fontSize="20px" />
          <LinkText>
            Today
          </LinkText>
        </LinkWrapper>
        <LinkWrapper>
          <OverduceIcon fontSize="20px" />
          <LinkText>
            Overdue
          </LinkText>
        </LinkWrapper>
        <LinkWrapper>
          <ProjectsIcon fontSize="20px" />
          <LinkText>
            Projects
          </LinkText>
          <IconWrapper>
            {props.openProjectList && <ArrowDown onClick={props.onClick} fontSize="20px" />}
            {!props.openProjectList && <ArrowForward onClick={props.onClick} fontSize="20px" />}
            <Add fontSize="30px" onClick={() => setModalOpen(true)} />
          </IconWrapper>
        </LinkWrapper>
        {isModalOpen && (
          <AddProjectModal
            headerText="Add project"
            onClick={() => setModalOpen(false)}
            handleSubmit={handleSubmit}
            isRequesting={isRequesting}
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
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          width: 100%;
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
          width: 100%;
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
  isRequesting?: boolean;
  handleSubmit?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const AddProjectModal = (props: AddProjectModalProps) => (
  <>
    <Modal onClose={props.onClick}>
      <ModalHeader>{props.headerText}</ModalHeader>
      {props.isRequesting ? <CircleSpinner height={20} /> : props.children}
      <Row>
        <Button text="add" onClick={props.handleSubmit} style={buttonStyle} />
        <Button text="cancel" style={buttonStyle} onClick={props.onClick} />
      </Row>
    </Modal>
  </>
);

export interface LinkWrapperProps {
  children?: React.ReactNode;
}

export const LinkWrapper = (props: LinkWrapperProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {
          `
          {
            display: flex;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          `
        }
      </style>
    </div>
  );
}

export interface LinkTextProps {
  children?: React.ReactNode;
}

export const LinkText = (props: LinkTextProps) => (
  <span>
    {props.children}
    <style jsx>
      {
        `
          {
            margin-left: 10px;
          }
        `
      }
    </style>
  </span>
)

export interface IconWrapperProps {
  children?: React.ReactNode;
}

export const IconWrapper = (props: IconWrapperProps) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
          }
        `
      }
    </style>
  </div>
)

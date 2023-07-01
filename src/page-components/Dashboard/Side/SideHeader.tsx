import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import Add from "react-ionicons/lib/IosAdd";
import ArrowDown from "react-ionicons/lib/IosArrowDown";
import ArrowForward from "react-ionicons/lib/IosArrowForward";
import TodayIcon from "react-ionicons/lib/IosAlarmOutline";
import OverduceIcon from "react-ionicons/lib/IosCalendarOutline";
import ProjectsIcon from "react-ionicons/lib/IosList";

import { Modal } from "../../../components/Modal";
import { ProjectModal } from "../../../feature-components/Project";
import { CircleSpinner, Text, Button } from "../../../components";
import {
  useProjectsApiActions,
  useProjectTasksApiActions
} from "../../../hooks";
import { buttonStyle, textStyle } from "./style";

export interface SideBarHeaderProps {
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
  openProjectList?: boolean;
}

export const SideBarHeader = (props: SideBarHeaderProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { project } = useProjectsApiActions();
  const { fetchTodaysTasks } = useProjectTasksApiActions();

  const {
    project: currentProject,
    actions: {
      addProject: { isRequesting, error }
    }
  } = project;

  return (
    <>
      <header>
        <TextWrapper>
          <TodayIcon fontSize="20px" />
          <Text
            style={
              currentProject.title === "today"
                ? { fontWeight: "bold", ...textStyle }
                : textStyle
            }
            onClick={() => {
              fetchTodaysTasks();
            }}
          >
            Today
          </Text>
        </TextWrapper>
        <TextWrapper>
          <OverduceIcon fontSize="20px" />
          <Text style={textStyle}>Overdue</Text>
        </TextWrapper>
        <TextWrapper>
          <ProjectsIcon fontSize="20px" />
          <Text style={textStyle}>Projects</Text>
          <IconWrapper>
            {props.openProjectList && (
              <ArrowDown onClick={props.onClick} fontSize="20px" />
            )}
            {!props.openProjectList && (
              <ArrowForward onClick={props.onClick} fontSize="20px" />
            )}
            <Add fontSize="30px" onClick={() => setModalOpen(true)} />
          </IconWrapper>
        </TextWrapper>
        {isModalOpen && (
          <ProjectModal
            headerText="Add project"
            handleCancel={() => setModalOpen(false)}
            isRequesting={isRequesting}
            action="add"
            colors={project.colors}
          />
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
        a {
          text-decoration: none;
          color: #8d8d8d;
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
          font-size: 13px;
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

export interface TextWrapperProps {
  children?: React.ReactNode;
}

export const TextWrapper = (props: TextWrapperProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            display: flex;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        `}
      </style>
    </div>
  );
};

export interface IconWrapperProps {
  children?: React.ReactNode;
}

export const IconWrapper = (props: IconWrapperProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
         {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
        }
      `}
    </style>
  </div>
);

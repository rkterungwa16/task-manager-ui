import React, { useState } from "react";
import MoreIcon from "react-ionicons/lib/IosMore";
import ArchiveIcon from "react-ionicons/lib/IosArchiveOutline";
import EditIcon from "react-ionicons/lib/IosCreateOutline";
import DeleteIcon from "react-ionicons/lib/IosTrashOutline";

import { Dropdown, Text, DropdownItem, Separator } from "../../components";
import {
  projectTextStyle,
  textBadgeStyle,
  projectDropdownItemTextStyle
} from "./style";
import { ProjectType, ProjectColorsType } from "../../models";
import { useProjectsApiActions } from "../../hooks";
import { ProjectModal } from "./ProjectModal";

export interface ProjectInterface {
  name: string;
}

export interface ProjectProps {
  title?: string;
  currentProjectTitle?: string;
  id?: string;
  color?: string;
  colors?: ProjectColorsType[];
  isFavourite?: boolean;
  numberOfTasks?: number;
  handleProjectTasksFetch?: (id: string) => void;
}
export const Project = (props: ProjectProps) => {
  const defaultDropdownModalStates = {
    editProject: false,
    deleteProject: false,
    archiveProject: false
  };
  const [isModalOpen, setIsModalOpen] = useState(defaultDropdownModalStates);
  const [dropdownIsOpen, openDropdown] = useState(false);
  return (
    <>
      <li>
        <ProjectItemInnerWrapper>
          <Text
            onClick={() => {
              props.handleProjectTasksFetch(props.id);
            }}
            text={props.title}
            style={{
              ...projectTextStyle,
              borderLeft: `5px solid ${props.color}`,
              ...(props.title === props.currentProjectTitle && {
                fontWeight: "bold"
              })
            }}
          ></Text>
          <Text style={textBadgeStyle}>
            {props.numberOfTasks ? props.numberOfTasks : null}
          </Text>
          <ProjectItemIconWrapper>
            <MoreIcon
              fontSize="25px"
              color="#8d8d8d"
              onClick={() => openDropdown(!dropdownIsOpen)}
            />
          </ProjectItemIconWrapper>
        </ProjectItemInnerWrapper>

        {dropdownIsOpen && (
          <Dropdown
            closeDropdown={() => {
              openDropdown(false);
            }}
          >
            <DropdownItem
              onClick={() => {
                openDropdown(false);
                setIsModalOpen(prevState => {
                  return {
                    ...prevState,
                    editProject: true
                  };
                });
              }}
            >
              <EditIcon />
              <Text text="Edit Project" style={projectDropdownItemTextStyle} />
            </DropdownItem>
            <Separator />
            <DropdownItem>
              <DeleteIcon />
              <Text
                text="Delete Project"
                style={projectDropdownItemTextStyle}
              />
            </DropdownItem>
            <DropdownItem>
              <ArchiveIcon />
              <Text
                text="Archive Project"
                style={projectDropdownItemTextStyle}
              />
            </DropdownItem>
          </Dropdown>
        )}
      </li>
      {isModalOpen.editProject ? (
        <ProjectModal
          headerText="Edit project"
          project={{
            title: props.title,
            color: props.color,
            isFavourite: props.isFavourite
          }}
          colors={props.colors}
          handleCancel={() =>
            setIsModalOpen({
              ...defaultDropdownModalStates,
              editProject: false
            })
          }
          action="edit"
          projectId={props.id}
        />
      ) : null}
      <style jsx>
        {`
           {
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

Project.defaultProps = {
  color: "#8D8D8D",
  isFavourite: false
};

export interface ProjectListProps {
  projects: ProjectType[];
}

const initialColorsState = [
  {
    code: "",
    name: ""
  }
];

export const ProjectList = (props: ProjectListProps) => {
  const { project, fetchUserProject } = useProjectsApiActions();

  const handleProjectTasksFetch = id => {
    fetchUserProject(id);
  };

  const { project: currentProject, projects, colors } = project;

  return (
    <>
      <ul>
        {projects.map(project => (
          <Project
            key={project._id}
            title={project.title}
            id={project._id}
            color={project.color}
            isFavourite={project.isFavourite}
            colors={colors}
            currentProjectTitle={currentProject.title}
            handleProjectTasksFetch={handleProjectTasksFetch}
            numberOfTasks={project.tasks.length}
          />
        ))}
      </ul>
      <style jsx>
        {`
           {
            animation: fadeIn 300ms ease-in;
            list-style: none;
            padding: 0;
            width: 100%;
            margin: 2px 0;
            transition: all 0.5s;
            height: 100%;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export interface ProjectItemInnerWrapperProps {
  children?: React.ReactNode;
}

export const ProjectItemInnerWrapper = (
  props: ProjectItemInnerWrapperProps
) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          cursor: pointer;
          height: 30px;
          padding: 5px 5px 5px 0;
          border-radius: 4px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}
    </style>
  </>
);

export interface ProjectItemIconWrapperProps {
  children?: React.ReactNode;
}

export const ProjectItemIconWrapper = (props: ProjectItemIconWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
        }
      `}
    </style>
  </>
);

export interface ProjectLinkProps {
  children?: React.ReactNode;
}

export const ProjectLink = (props: ProjectLinkProps) => (
  <a>
    {props.children}
    <style jsx>
      {`
         {
          text-decoration: none;
        }
      `}
    </style>
  </a>
);

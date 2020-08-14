import { useState, useEffect } from "react";
import MoreIcon from "react-ionicons/lib/IosMore";
import uniqid from "uniqid";

import { Dropdown, Text } from "../SharedComponents";
import { projectTextStyle } from "./style";
import { ProjectType, ProjectColorsType } from "../../models";
import { useProjectTasksApiActions, useProjectsApiActions } from "../../hooks";
import { ProjectModal } from "./ProjectModal";

export interface ProjectInterface {
  name: string;
}

export interface ProjectProps {
  title?: string;
  id?: string;
  color?: string;
  colors?: ProjectColorsType[];
  isFavourite?: boolean;
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
              borderLeft: `5px solid ${props.color}`
            }}
          />
          <ProjectItemIconWrapper>
            <MoreIcon
              fontSize="35px"
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
            handleEditProjectModalOpen={() => {
              openDropdown(false);
              setIsModalOpen(prevState => {
                return {
                  ...prevState,
                  editProject: true
                };
              });
            }}
          />
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
            width: 95%;
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
  const { fetchProjectTasks } = useProjectTasksApiActions();
  const { project, fetchUserProject } = useProjectsApiActions();

  const [colors, setColors] = useState(initialColorsState);

  useEffect(() => {
    if (JSON.stringify(project.colors) !== JSON.stringify(colors)) {
      setColors(project.colors);
    }
  }, [JSON.stringify(project.colors)]);
  const handleProjectTasksFetch = id => {
    fetchProjectTasks(id);
    fetchUserProject(id);
  };

  return (
    <>
      <ul>
        {props.projects.map(project => (
          <Project
            key={uniqid(`${project.title} - `)}
            title={project.title}
            id={project._id}
            color={project.color}
            isFavourite={project.isFavourite}
            colors={colors}
            handleProjectTasksFetch={handleProjectTasksFetch}
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

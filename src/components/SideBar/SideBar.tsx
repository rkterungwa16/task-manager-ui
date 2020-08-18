import { useState, useEffect } from "react";
import Router from "next/router";

import { SideBarHeader } from "./SideBarHeader";
import { SideBarProjectLists } from "./SideBarProjectLists";
import { CircleSpinner } from "../SharedComponents";
import { ProjectType, ProjectColorsType } from "../../models";
import { Routes } from "../../routes/client";
import {
  useProjectsApiActions
} from "../../hooks";

const initialProjectState = {
  _id: "",
  title: "",
  description: "",
  color: "",
  owner: "",
  tasks: [],
  isFavourite: false,
  isArchived: false,
  isDeleted: false,
  collaborators: [],
  createdAt: "",
  updatedAt: ""
};

const initialColorsState = [
  {
    code: "",
    name: ""
  }
];

const initialProjectsState = [initialProjectState];

export interface SideBarProps {
  colors?: ProjectColorsType[];
  projects?: ProjectType[];
  isRequestingProjects?: boolean;
  isOpen?: boolean;
}
export const SideBar = (props: SideBarProps) => {
  const {
    project,
    fetchUserProjects,
    fetchProjectColors
  } = useProjectsApiActions();
  const [projectListIsOpen, setProjectListOpen] = useState(true);
  const [projects, setProjects] = useState(initialProjectsState);
  const [colors, setColors] = useState(initialColorsState);
  const [isRequestingProjects, setIsRequestingProjects] = useState(false);

  useEffect(() => {
    if (
      project.actions.fetchUserProjects.isRequesting !== isRequestingProjects
    ) {
      setIsRequestingProjects(project.actions.fetchUserProjects.isRequesting);
    }
  }, [project.actions.fetchUserProjects.isRequesting]);

  useEffect(() => {
    if (JSON.stringify(project.colors) !== JSON.stringify(colors)) {
      setColors(project.colors);
    }
  }, [JSON.stringify(project.colors)]);

  /**
   * Set projects
   */
  useEffect(() => {
    fetchUserProjects();
    fetchProjectColors();
    if (JSON.stringify(projects) !== JSON.stringify(project.projects)) {
      setProjects(project.projects);
    }
  }, [JSON.stringify(project.projects)]);
  return (
    <>
      <SidebarContainer isOpen={props.isOpen}>
        <SidebarContentWrapper isOpen={props.isOpen}>
          <SideBarHeader
            openProjectList={projectListIsOpen}
            onClick={() => setProjectListOpen(!projectListIsOpen)}
          />
          {isRequestingProjects ? (
            <Wrapper>
              <CircleSpinner height={20} />
            </Wrapper>
          ) : (
            <SideBarProjectLists
              projects={projects}
              openProjectList={projectListIsOpen}
            />
          )}
        </SidebarContentWrapper>
      </SidebarContainer>
    </>
  );
};

interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
         {
          display: flex;
          width: 100%;
          height: 200px;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

export interface SidebarContainerProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const SidebarContainer = (props: SidebarContainerProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          width: 305px;
          height: 100vh;
          padding-top: 74px;
          padding-left: 25px;
          padding-right: 25px;
          margin-left: -32px;
          position: relative;
          overflow-x: hidden;
          overflow-y: hidden;
          border-right: 1px solid #e1e1e1;
          background-color: #ededed;
          margin-left: 0;
        }

        @media screen and (max-width: 600px) {
           {
            z-index: 99;
            position: absolute;
            top: 0px;
            width: ${props.isOpen ? "305px" : 0};
            padding-left: ${props.isOpen ? "25px" : 0};
            padding-right: ${props.isOpen ? "25px" : 0};
            padding-top: ${props.isOpen ? "74px" : 0};
            transition: 0.15s ease-out;
          }
        }
      `}
    </style>
  </>
);

SidebarContainer.defaultProps = {
  isOpen: false
};

export interface SidebarContentWrapperProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const SidebarContentWrapper = (props: SidebarContentWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          width: 100%;
          padding-bottom: 30px;
          height: 100%;
        }
        @media screen and (max-width: 600px) {
           {
            display: ${props.isOpen ? "block" : "none"};
            transition: 0.15s ease-out;
          }
        }
      `}
    </style>
  </>
);

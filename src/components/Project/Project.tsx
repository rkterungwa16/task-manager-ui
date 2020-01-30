import { useState } from "react";
import MoreIcon from "react-ionicons/lib/IosMore";
import uniqid from "uniqid";

import { Dropdown, Text } from "../SharedComponents";
import { projectTextStyle } from "./style";

export interface ProjectInterface {
  name: string;
}

export interface ProjectProps {
  name?: string;
}
export const Project = (props: ProjectProps) => {
  const [dropdownIsOpen, openDropdown] = useState(false);
  return (
    <>
      <li>
        <ProjectItemInnerWrapper>
          <Text text={props.name} style={projectTextStyle} />
          <ProjectItemIconWrapper>
            <MoreIcon
              fontSize="35px"
              color="#8d8d8d"
              onClick={() => openDropdown(!dropdownIsOpen)}
            />
          </ProjectItemIconWrapper>
        </ProjectItemInnerWrapper>
        {dropdownIsOpen && <Dropdown />}
      </li>
      <style jsx>
        {`
           {
            width: 100%;
            padding: 5px;
          }
        `}
      </style>
    </>
  );
};

export interface ProjectListProps {
  projects: ProjectInterface[];
}

export const ProjectList = (props: ProjectListProps) => (
  <>
    <ul>
      {props.projects.map(project => (
        <Project key={uniqid(`${project.name} - `)} name={project.name} />
      ))}
    </ul>
    <style jsx>
      {`
         {
          width: 100%;
          list-style: none;
          padding: 0;
        }
      `}
    </style>
  </>
);

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
          height: 60px;
          margin-bottom: 10px;
          padding: 5px 5px 5px 0;
          border-radius: 4px;
          background-color: #fff;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        :hover {
          background-color: #fff;
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

import { useState } from "react";
import Router from "next/router";
import MoreIcon from "react-ionicons/lib/IosMore";
import uniqid from "uniqid";

import { Dropdown, Text } from "../SharedComponents";
import { projectTextStyle } from "./style";
import { ProjectType } from "../../models";
import { Routes } from "../../routes/client";

export interface ProjectInterface {
  name: string;
}

export interface ProjectProps {
  title?: string;
  id?: string;
}
export const Project = (props: ProjectProps) => {
  const [dropdownIsOpen, openDropdown] = useState(false);
  return (
    <>
      <li>
        <ProjectItemInnerWrapper>
          <Text
            onClick={() => {
              Router.push(`${Routes.Dashboard}/${props.id}`);
            }}
            text={props.title}
            style={projectTextStyle}
          />
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
  projects: ProjectType[];
}

export const ProjectList = (props: ProjectListProps) => {
  return (
    <>
      <ul>
        {props.projects.map(project => (
          <Project
            key={uniqid(`${project.title} - `)}
            title={project.title}
            id={project._id}
          />
        ))}
      </ul>
      <style jsx>
        {`
           {
            list-style: none;
            padding: 0;
            width: 100%;
            margin: 2px 0;
            transition: all 0.5s;
            height: 0;
          }
          :focus {
            height: 100%;
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
          height: 40px;
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

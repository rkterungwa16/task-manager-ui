import { useState } from "react";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarProjectLists } from "./SideBarProjectLists";
import { ProjectType } from "../../models";

export interface SideBarProps {
  projects?: ProjectType[];
}
export const SideBar = (props: SideBarProps) => {
  const [projectListIsOpen, setProjectListOpen] = useState(true);

  return (
    <>
      <SidebarContainer>
        <SidebarContentWrapper>
          <SideBarHeader
            openProjectList={projectListIsOpen}
            onClick={() => setProjectListOpen(!projectListIsOpen)}
          />
          <SideBarProjectLists
            projects={props.projects}
            openProjectList={projectListIsOpen}
          />
        </SidebarContentWrapper>
      </SidebarContainer>
    </>
  );
};

export interface SidebarContainerProps {
  children?: React.ReactNode;
}

export const SidebarContainer = (props: SidebarContainerProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          width: 35%;
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
      `}
    </style>
  </>
);

export interface SidebarContentWrapperProps {
  children?: React.ReactNode;
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
      `}
    </style>
  </>
);

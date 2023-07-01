import * as React from "react";
import { ProjectList } from "../../../feature-components/Project";
import { ProjectType } from "../../../models";
import { Text } from "../../../components";
import { emptyProjectTextStyle } from "./style";

export interface SideBarProjectListsProps {
  openProjectList?: boolean;
  projects?: ProjectType[];
}

export const SideBarProjectLists = (props: SideBarProjectListsProps) => (
  <>
    <div>
      {!props.projects ? (
        <Wrapper>
          <Text
            text="No Projects Yet. Go on! Create One!"
            style={emptyProjectTextStyle}
          />
        </Wrapper>
      ) : (
        props.openProjectList && <ProjectList projects={props.projects} />
      )}
    </div>
    <style jsx>
      {`
         {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}
    </style>
  </>
);

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

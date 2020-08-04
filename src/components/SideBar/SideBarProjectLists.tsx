import { ProjectList } from "../Project";
import { ProjectType } from "../../models";

export interface SideBarProjectListsProps {
  openProjectList?: boolean;
  projects?: ProjectType[];
}

export const SideBarProjectLists = (props: SideBarProjectListsProps) => (
  <>
    <div>
      {props.openProjectList && <ProjectList projects={props.projects} />}
    </div>
    <style jsx>
      {`
        {
          width: 100%;
          margin-left: 10px;
          display: flex;
          justify-content: center;
        }
      `}
    </style>
  </>
);

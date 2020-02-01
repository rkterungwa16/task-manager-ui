import { ProjectList } from "../Project";

const projects = [
  {
    name: "Tiv Language Studies"
  },
  {
    name: "Tiv Language Studies and all things"
  }
];

export interface SideBarProjectListsProps {
  openProjectList?: boolean;
}

export const SideBarProjectLists = (props: SideBarProjectListsProps) => (
  <>
    <div>{props.openProjectList && <ProjectList projects={projects} />}</div>
    <style jsx>
      {`
         {
          width: 100%;
        }
      `}
    </style>
  </>
);

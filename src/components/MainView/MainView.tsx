import { ProjectList } from "../Project";

const projects = [
  {
    name: "Tiv Language Studies"
  },
  {
    name: "Tiv Language Studies and all things"
  }
];
export interface MainViewProps {
  children?: React.ReactNode;
}

export const MainView = (props: MainViewProps) => (
  <>
    <div>
      <ProjectList projects={projects} />
      {props.children}
    </div>
    <style jsx>
      {`
         {
          width: 60%;
          height: 100vh;
          position: relative;
          padding: 50px 100px 0px 100px;
          border-left: 1px solid #ededed;
          background-color: #f9f9f9;
        }
      `}
    </style>
  </>
);

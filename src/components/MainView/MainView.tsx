import { TaskList } from "../Task";
import { TaskType, ProjectType } from "../../models";

export interface MainViewProps {
  children?: React.ReactNode;
  tasks?: TaskType[];
  project?: ProjectType;
}

export const MainView = (props: MainViewProps) => {
  console.log('props value ->>', props);
  return (
    <>
      <div>
        <TasksHeader>
          {props.project ? props.project.title : null}
        </TasksHeader>
        <TaskList tasks={props.tasks} />
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
};

export interface TasksHeaderProps {
  children?: React.ReactNode;
}

export const TasksHeader = (props: TasksHeaderProps) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
        {
          width: 70%;
          display: flex;
          justify-content: center;
          padding-top: 15px;
          font-size: 25px;
          font-weight: bold;
          color: #8d8d8d;
        }
        `
      }
    </style>
  </div>
)

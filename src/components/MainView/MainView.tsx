import { TaskList } from "../Task";
import { TaskType } from "../../models";

export interface MainViewProps {
  children?: React.ReactNode;
  tasks?: TaskType[];
}

export const MainView = (props: MainViewProps) => {
  return (
    <>
      <div>
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

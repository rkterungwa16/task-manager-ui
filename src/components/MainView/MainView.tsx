import { TaskList } from "../Task";
import { Text } from "../SharedComponents";
import { TaskType, ProjectType } from "../../models";
import { emptyProjectTextStyle } from "./style";

export interface MainViewProps {
  children?: React.ReactNode;
  tasks?: TaskType[];
  project?: ProjectType;
}

export const MainView = (props: MainViewProps) => {
  return (
    <>
      <div>
        <TasksHeader>{props.project ? props.project.title : null}</TasksHeader>
        {!props.tasks.length ||
        (props.tasks.length === 1 && !props.tasks[0].content) ? (
          <Wrapper>
            <Text
              text="No tasks yet. Go on! Create one!"
              style={emptyProjectTextStyle}
            />
          </Wrapper>
        ) : (
          <TaskList tasks={props.tasks} />
        )}
      </div>
      <style jsx>
        {`
           {
            width: 50%;
            height: 100vh;
            position: relative;
            padding: 50px 100px 0px 100px;
            border-left: 1px solid #ededed;
            background-color: #f9f9f9;
            display: flex;
            flex-direction: column;
            align-items: center;
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
      {`
         {
          width: 100%;
          display: flex;
          justify-content: center;
          padding-top: 15px;
          font-size: 25px;
          font-weight: bold;
          color: #8d8d8d;
        }
      `}
    </style>
  </div>
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

import { useState, useEffect } from "react";
import Router from "next/router";

import { Routes } from "../../routes/client";
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
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (Router.pathname !== pathname) {
      setPathname(Router.pathname);
    }
  }, [pathname]);
  const alternativeTitles = {
    [Routes.Today]: "Today",
    [Routes.Overdue]: "Overdue"
  };
  return (
    <>
      <div>
        <TasksHeader>
          {alternativeTitles[pathname]
            ? alternativeTitles[pathname]
            : props.project
            ? props.project.title
            : null}
        </TasksHeader>
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
            width: 100%;
            height: 100vh;
            position: relative;
            padding: 50px 100px 0px 100px;
            border-left: 1px solid #ededed;
            background-color: #f9f9f9;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          @media screen and (max-width: 600px) {
             {
              padding: 50px 0 0 0;
            }
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
          width: 60%;
          justify-content: flex-start;
          margin-left: 15px;
          display: flex;
          padding-top: 15px;
          font-size: 22px;
          font-weight: bold;
          color: #8d8d8d;
        }

        @media screen and (max-width: 600px) {
           {
            width: 90%;
          }
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
          width: 60%;
          justify-content: flex-start;
          margin-left: 15px;
          height: 90px;
          align-items: center;
        }
      `}
    </style>
  </div>
);

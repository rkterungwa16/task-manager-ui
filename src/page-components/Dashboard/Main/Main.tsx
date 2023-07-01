import React, { useState, useEffect } from "react";
import Router from "next/router";

import { Routes } from "../../../routes/client";
import { TaskList, AddTaskEditor } from "../../../feature-components/Task";
import { Text, FormInput, Button } from "../../../components";
import { TaskType, ProjectType } from "../../../models";
import { emptyProjectTextStyle } from "./style";
import {
  useProjectTasksApiActions,
  useProjectsApiActions
} from "../../../hooks";

const initialProjectState = {
  _id: "",
  title: "",
  description: "",
  color: "",
  owner: { _id: "" },
  tasks: [],
  isFavourite: false,
  isArchived: false,
  isDeleted: false,
  collaborators: [],
  createdAt: "",
  updatedAt: ""
};

export interface MainViewProps {
  children?: React.ReactNode;
  tasks?: TaskType[];
  project?: ProjectType;
}

export const MainView = () => {
  const {
    project,
    createProjectTasks,
    editProjectTask
  } = useProjectsApiActions();
  const { fetchTodaysTasks } = useProjectTasksApiActions();
  const [pathname, setPathname] = useState("");
  const [addTaskIsOpen, setAddTaskOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(initialProjectState);

  useEffect(() => {
    if (Router.pathname !== pathname) {
      setPathname(Router.pathname);
    }
  }, [pathname]);

  const {
    actions: {
      createProjectTask: { isRequesting, error },
      editProjectTask: {
        isRequesting: isEditingProjectTask,
        error: editingTaskError
      }
    }
  } = project;

  useEffect(() => {
    if (JSON.stringify(project.project) !== JSON.stringify(currentProject)) {
      setCurrentProject(project.project);
    }
  }, [JSON.stringify(project.project)]);

  /**
   * Set tasks and corresponding project
   */
  useEffect(() => {
    if (Router.pathname !== pathname && Router.pathname === Routes.Today) {
      fetchTodaysTasks();
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
          {currentProject.title ? currentProject.title : null}
        </TasksHeader>
        {!currentProject.tasks.length ||
        (currentProject.tasks.length === 1 &&
          !currentProject.tasks[0].description) ? (
          <Wrapper>
            <Text
              text="No tasks yet. Go on! Create one!"
              style={emptyProjectTextStyle}
            />
          </Wrapper>
        ) : (
          <TaskList
            tasks={currentProject.tasks}
            editProjectTask={editProjectTask}
            isRequesting={isEditingProjectTask}
          />
        )}
        <AddTaskEditor
          projectId={currentProject._id}
          // userId={currentProject.owner._id}
          createProjectTasks={createProjectTasks}
          isRequesting={isRequesting}
        />
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
            overflow-y: auto;
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
          text-transform: capitalize;
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

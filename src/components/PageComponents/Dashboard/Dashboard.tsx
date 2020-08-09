import Head from "next/head";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Routes } from "../../../routes/client";
import { MainView } from "../../../components/MainView";
import { ModalProvider } from "../../../components/Modal";
import TopNav from "../../../components/TopNav";
import { SideBar } from "../../SideBar/SideBar";
import {
  useProjectsApiActions,
  useProjectTasksApiActions
} from "../../../hooks";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

const initialProjectState = {
  _id: "",
  title: "",
  description: "",
  color: "",
  owner: "",
  tasks: [],
  isFavourite: false,
  isArchived: false,
  isDeleted: false,
  collaborators: [],
  createdAt: "",
  updatedAt: ""
};

const initialColorsState = [{
  code: "",
  name: ""
}]

const initialProjectsState = [initialProjectState];

const initalTasksState = [
  {
    _id: "",
    content: "",
    createdAt: "",
    dueDate: "",
    label: [],
    priority: null,
    project: "",
    updatedAt: "",
    userId: ""
  }
];

export const Dashboard = () => {
  const { project, fetchUserProjects, fetchProjectColors } = useProjectsApiActions();
  const { task, fetchTodaysTasks } = useProjectTasksApiActions();
  const [projects, setProjects] = useState(initialProjectsState);
  const [pathname, setPathname] = useState("");
  const [currentProject, setCurrentProject] = useState(initialProjectState);
  const [colors, setColors] = useState(initialColorsState);
  const [isRequestingProjects, setIsRequestingProjects] = useState(false);
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   if (project.code >= 400 && project.code < 600) {
  //     Router.push(Routes.Login);
  //   }
  // }, [project.code])

  /**
   * Set projects
   */
  useEffect(() => {
    fetchUserProjects();
    fetchProjectColors();
    if (Router.pathname !== pathname) {
      setPathname(Router.pathname);
    }
    if (JSON.stringify(projects) !== JSON.stringify(project.projects)) {
      setProjects(project.projects);
    }
  }, [JSON.stringify(project.projects)]);

  useEffect(() => {
    if (
      project.actions.fetchUserProjects.isRequesting !== isRequestingProjects
    ) {
      setIsRequestingProjects(project.actions.fetchUserProjects.isRequesting);
    }
  }, [project.actions.fetchUserProjects.isRequesting]);

  useEffect(() => {
    if (JSON.stringify(project.project) !== JSON.stringify(currentProject)) {
      setCurrentProject(project.project);
    }
  }, [JSON.stringify(project.project)]);

  useEffect(() => {
    if (JSON.stringify(project.colors) !== JSON.stringify(colors)) {
      setColors(project.colors);
    }
  }, [JSON.stringify(project.colors)]);

  /**
   * Set tasks and corresponding project
   */
  useEffect(() => {
    if (Router.pathname !== pathname && Router.pathname === Routes.Today) {
      fetchTodaysTasks();
    }
    if (JSON.stringify(tasks) !== JSON.stringify(task.tasks)) {
      setTasks(task.tasks);
    }
  }, [JSON.stringify(task.tasks), pathname]);

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = message => {
      console.log(message);
    };
  });
  return (
    <div>
      <ModalProvider>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopNav />
        <DashboardContentContainer>
          <SideBar
            colors={colors}
            projects={projects}
            isRequestingProjects={isRequestingProjects}
          />
          <MainView tasks={tasks} project={currentProject} />
        </DashboardContentContainer>
      </ModalProvider>
      <style jsx global>{`
        body {
          font-family: "Source Sans Pro", sans-serif;
          margin: 0;
          height: 100%;
          width: 100%;
          position: absolute;
          overflow: hidden;
        }
         {
          font-family: Source Sans Pro, sans-serif;
          height: 100%;
          position: relative;
          display: flex;
          z-index: 0;
          height: 100%;
          width: 100%;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export interface DashboardContentContainerProps {
  children?: React.ReactNode;
}

export const DashboardContentContainer = (
  props: DashboardContentContainerProps
) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          top: 0;
          width: 100%;
          position: absolute;
          display: flex;
          justify-content: flex-start;
          font-family: Source Sans Pro, sans-serif;
          height: 100%;
        }
      `}
    </style>
  </>
);

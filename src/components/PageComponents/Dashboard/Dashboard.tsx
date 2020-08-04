import Head from "next/head";
import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
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
  const { project, fetchUserProjects } = useProjectsApiActions();
  const { task } = useProjectTasksApiActions();
  const [projects, setProjects] = useState(initialProjectsState);
  const [currentProject, setCurrentProject] = useState(initialProjectState);
  const [isRequestingProjects, setIsRequestingProjects] = useState(false);
  const [tasks, setTasks] = useState([]);

  /**
   * Set projects
   */
  useEffect(() => {
    fetchUserProjects();
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

  /**
   * Set tasks and corresponding project
   */
  useEffect(() => {
    if (JSON.stringify(tasks) !== JSON.stringify(task.tasks)) {
      setTasks(task.tasks);
    }
  }, [JSON.stringify(task.tasks)]);

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

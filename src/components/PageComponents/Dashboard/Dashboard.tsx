import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
}

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
  const { task, fetchProjectTasks } = useProjectTasksApiActions();
  const [projects, setProjects] = useState(initialProjectsState);
  const [selectedProject, setSelectedProject] = useState(initialProjectState)
  const [tasks, setTasks] = useState([]);
  const {
    query: { id }
  } = useRouter();

  useEffect(() => {
    fetchUserProjects();
    if (JSON.stringify(projects) !== JSON.stringify(project.projects)) {
      setProjects(project.projects);
    }
  }, [JSON.stringify(project.projects)]);

  useEffect(() => {
    if (id) {
      fetchProjectTasks(id);
      const selectedProject = projects.find((project) => project._id === id);
      setSelectedProject(selectedProject);
      if (JSON.stringify(tasks) !== JSON.stringify(task.tasks)) {
        setTasks(task.tasks);
      }
    }
  }, [id, JSON.stringify(task.tasks)]);

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
          />
          <MainView
            tasks={tasks}
            project={selectedProject}
          />
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

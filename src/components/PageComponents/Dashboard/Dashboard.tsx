import Head from "next/head";
import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { MainView } from "../../../components/MainView";
import { ModalProvider } from "../../../components/Modal";
import TopNav from "../../../components/TopNav";
import { SideBar } from "../../SideBar/SideBar";
import { useProjectsApiActions } from "../../../hooks";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

const initialProjectsState = [
  {
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
];

export const Dashboard = () => {
  const { project, fetchUserProjects } = useProjectsApiActions();
  const [projects, setProjects] = useState(initialProjectsState);
  useEffect(() => {
    fetchUserProjects();
    if (JSON.stringify(projects) !== JSON.stringify(project.projects)) {
      setProjects(project.projects);
    }
  }, [JSON.stringify(project.projects)]);

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
          <SideBar projects={projects} />
          <MainView />
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

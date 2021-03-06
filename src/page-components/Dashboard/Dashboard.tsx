import Head from "next/head";
import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { MainView } from "./Main";
import { ModalProvider } from "../../components/Modal";
import { TopNav } from "../../components/TopNav";
import { SideBar } from "./Side/Side";
import { useProjectTasksApiActions, useProjectsApiActions } from "../../hooks";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

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
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const { fetchTodaysTasks } = useProjectTasksApiActions();
  const { project } = useProjectsApiActions();

  // useEffect(() => {
  //   if (project.code >= 400 && project.code < 600) {
  //     Router.push(Routes.Login);
  //   }
  // }, [project.code])

  useEffect(() => {
    if (!project.project.title) {
      fetchTodaysTasks();
    }
  }, [JSON.stringify(project.project)]);

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
        <TopNav
          openSidBar={() => {
            setSidebarOpen(!sidebarIsOpen);
          }}
        />
        <DashboardContentContainer>
          <SideBar isOpen={sidebarIsOpen} />
          <MainView />
        </DashboardContentContainer>
      </ModalProvider>
      <style jsx global>{`
        body {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 14px;
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

import Head from "next/head";
import React, { useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import LeftSideBar from "../src/components/LeftSideBar/LeftSideBar";
import { ModalProvider } from "../src/components/Modal";
import TopNav from "../src/components/TopNav";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

const Dashboard = () => {
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
        <div className="dashboard-container">
          <LeftSideBar />
          <div className="right-view"></div>
        </div>
      </ModalProvider>
      <style jsx global>{`
        .dashboard-container {
          top: 0;
          width: 100%;
          position: absolute;
          font-family: Source Sans Pro, sans-serif;
          height: 100%;
        }
        .right-view {
          width: 100%;
          height: 100vh;
          position: relative;
          top: 0;
          left: 352px;
          border-left: 1px solid #ededed;
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};
export default Dashboard;

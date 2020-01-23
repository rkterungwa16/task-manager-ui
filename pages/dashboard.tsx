import React, { useEffect } from 'react'
import Head from 'next/head'
import TopNav from '../components/TopNav'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

const Dashboard = () => {
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  });
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <div className="dashboard-container">
        <LeftSideBar />
      </div>
      <style jsx global>{`
        .dashboard-container {
          top: 0;
          width: 100%;
          position: absolute;
          font-family: Source Sans Pro, sans-serif;
        }
      `}</style>
    </div>
  )
}
export default Dashboard

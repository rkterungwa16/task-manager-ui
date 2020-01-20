import React, { useEffect } from 'react'
import Head from 'next/head'
import TopNav from '../components/TopNav'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

const Home = () => {
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
      <div className="container">
        <LeftSideBar />
      </div>
      <style jsx>{`
        .container {
          top: 0;
          width: 100%;
          position: absolute;
        }
      `}</style>
    </div>
  )
}
export default Home

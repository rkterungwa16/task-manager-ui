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
      <div className="container">
        <div className="home_wrapper">
          <img
            className="nav_logo-image"
            src="https://res.cloudinary.com/doy0uyv63/image/upload/v1579521214/task-manager_zob3ne.png"
            alt="Task Manager"
          />
          <div className="home_btn-container">
            <button className="home-btn">Get Started</button>
            <span className="already_member-text">already a member?</span>
            <button className="home-btn">Login</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          top: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .home_wrapper {
          top: 0;
          width: 50%;
          height: 100%;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .home_btn-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .home-btn {
          text-align: center;
          font-size: 14px;
          color: #767676;
          width: 100%;
          font-weight: bold;
          padding: 10px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .home-btn:hover {
          background: #c23d38;
          color: #fff;
          border-radius: 3px;
        }
        .already_member-text {
          text-align: center;
          font-size: 20px;
          color: #767676;
          padding: 10px;
        }
      `}</style>
    </div>
  )
}
export default Home

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home_wrapper">
          <img
            className="nav_logo-image"
            src="https://res.cloudinary.com/doy0uyv63/image/upload/v1579521214/task-manager_zob3ne.png"
            alt="Task Manager"
          />
          <div className="home_btn-container">
            <Link href="/register">
              <a className="home-btn">Get Started</a>
            </Link>

            <span className="already_member-text">already a member?</span>
            <Link href="/login">
              <a className="home-btn">Login</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          font-family: "Source Sans Pro", sans-serif;
          margin: 0;
          height: 100%;
          width: 100%;
          position: absolute;
          overflow: hidden;
        }
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
          text-decoration: none;
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
    </>
  );
};
export default Home;

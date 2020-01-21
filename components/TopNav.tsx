import React from 'react';
import Link from 'next/link';

import Notifications from "react-ionicons/lib/IosNotificationsOutline";
import Settings from "react-ionicons/lib/IosSettingsOutline";

const TopNav = () => (
  <nav>
    <div className="nav_left-icon">
      <Link href="/">
        <a>
          <img
            className="nav_logo-image"
            src="https://res.cloudinary.com/doy0uyv63/image/upload/c_scale,h_40/v1579521214/task-manager_zob3ne.png"
            alt="Task Manager"
          /></a>
      </Link>
    </div>

    <div className="nav_right-icon">
      <Notifications
        color="#c23d38"
        fontSize="30px"
      />
      <Settings
        color="#c23d38"
        fontSize="30px"
      />
    </div>

    <style jsx>{`
      nav {
        box-sizing: border-box;
        height: 44px;
        background-color: #fff;
        top: 0;
        position: fixed;
        z-index: 1;
        display: flex;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: space-around;
        width: 100vw;
        border-bottom: solid 1px #e1e1e1;
        -webkit-transition: height 200ms ease-in;
        transition: height 200ms ease-in;
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      .nav_right-icon {
        width: 15%;
        display: flex;
        justify-content: space-around;
      }
      .nav_logo-image {
        position: absolute;
        top: 5px;
      }
    `}</style>
  </nav>
)

export default TopNav

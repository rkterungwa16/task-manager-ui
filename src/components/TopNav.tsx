import React from "react";
import Link from "next/link";
import MenuIcon from "react-ionicons/lib/IosMenuOutline";
import HomeIcon from "react-ionicons/lib/IosHomeOutline";

// import Notifications from "react-ionicons/lib/IosNotificationsOutline";
import Settings from "react-ionicons/lib/IosSettingsOutline";

export interface TopNavProps {
  openSidBar?: () => void;
}
export const TopNav = (props: TopNavProps) => (
  <nav>
    <div className="nav_left-icon">
      <MenuIconWrapper>
        <MenuIcon onClick={props.openSidBar} color="#8D8D8D" fontSize="30px" />
      </MenuIconWrapper>
      <Link href="/">
        <a>
          <HomeIcon color="#8D8D8D" fontSize="30px" />
        </a>
      </Link>
    </div>

    <div className="nav_right-icon">
      {/* <Notifications color="#c23d38" fontSize="30px" /> */}
      <Settings color="#8D8D8D" fontSize="30px" />
    </div>

    <style jsx>{`
      nav {
        box-sizing: border-box;
        height: 44px;
        background-color: #fff;
        top: 0;
        position: fixed;
        z-index: 999;
        display: flex;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: space-between;
        width: 100vw;
        border-bottom: solid 1px #e1e1e1;
        -webkit-transition: height 200ms ease-in;
        transition: height 200ms ease-in;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      .nav_left-icon {
        margin-left: 30px;
        display: flex;
      }
      .nav_right-icon {
        margin-right: 60px;
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
);

export interface MenuIconWrapperProps {
  children?: React.ReactNode;
}

export const MenuIconWrapper = (props: MenuIconWrapperProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            display: none;
          }
          @media screen and (max-width: 600px) {
             {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

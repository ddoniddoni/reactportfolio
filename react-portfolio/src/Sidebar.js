import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";
import SidebarMenu from "./SidebarMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Link to="/">
          <Avatar src="https://avatars2.githubusercontent.com/u/33341413?s=460&u=7f26c34ba6d2bc1b40c2fa5c6193411fe1723874&v=4" />
        </Link>

        <div className="sidebar__headerRight">
          <h3>Sangdon's Portfolio</h3>
          <IconButton a href="mailto:psdkei@naver.com">
            <Mail />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__menuContainer">
          <h3>Portfolio Menu</h3>
        </div>
      </div>

      <div className="sidebar__menus">
        <Link to="/netflix">
          <SidebarMenu title="Netflix" route="netflix" />
        </Link>
        <Link to="/tinder">
          <SidebarMenu title="Tinder" route="tinder" />
        </Link>
        <Link to="./airbnb">
          <SidebarMenu title="Airbnb" route="airbnb" />
        </Link>
        <Link to="./kakao">
          <SidebarMenu title="Kakao" route="kakao" />
        </Link>
        <Link to="/wordrelay">
          <SidebarMenu title="WordRelay" route="wordrelay" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

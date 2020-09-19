import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars2.githubusercontent.com/u/33341413?s=460&u=7f26c34ba6d2bc1b40c2fa5c6193411fe1723874&v=4" />
        <div className="sidebar__headerRight">
          <h3>Sangdon's Portfolio</h3>
          <IconButton>
            <Mail />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__menuContainer">
          <h3>Portfolio Menu</h3>
        </div>
      </div>
      <div className="sidebar__menus"></div>
    </div>
  );
};

export default Sidebar;

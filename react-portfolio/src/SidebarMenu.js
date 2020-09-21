import React from "react";
import "./SidebarMenu.css";

const SidebarMenu = ({ title, description }) => {

  return (
    <div className="sidebarMenu">
      <div className="sidebarMenu__info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SidebarMenu;

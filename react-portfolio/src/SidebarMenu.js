import React from "react";
import "./SidebarMenu.css";

const SidebarMenu = ({ title }) => {
  return (
    <div className="sidebarMenu">
      <div className="sidebarMenu__info">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SidebarMenu;

import React from "react";
import "../Screen.css";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import ScreenView from "../ScreenView";

const ScreenNetflix = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__headerInfo">
          <h3>Netflix</h3>
          <p>This is Netflix</p>
        </div>

        <div className="screen__headerRight">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="screen__body">
        <ScreenView
          src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=1024"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default ScreenNetflix;

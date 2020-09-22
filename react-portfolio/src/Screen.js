import React from "react";
import "./Screen.css";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";

const Screen = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__headerInfo">
          <h3>Frontend-Developer</h3>
          <p>항상 즐겁게 창의적인 개발을 추구하는 개발자입니다.</p>
        </div>

        <div className="screen__headerRight">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="screen__body">
        <h3>내 설명</h3>
      </div>
    </div>
  );
};

export default Screen;

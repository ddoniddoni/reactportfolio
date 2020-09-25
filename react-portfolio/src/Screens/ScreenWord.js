import React from "react";
import "../Screen.css";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import WordRelay from "../Webgame/WordRelay";

const ScreenWord = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__headerInfo">
          <h3>Word-Relay</h3>
          <p>React를 이용한 끝말잇기 게임</p>
        </div>

        <div className="screen__headerRight">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="screen__body">
        <WordRelay />
      </div>
    </div>
  );
};

export default ScreenWord;

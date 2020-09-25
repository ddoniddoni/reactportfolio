import React from "react";
import "../Screen.css";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import Lotto from "../Webgame/Lotto";

const ScreenLotto = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__headerInfo">
          <h3>Lotto</h3>
          <p>React를 이용한 Lotto 숫자뽑기</p>
        </div>

        <div className="screen__headerRight">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="screen__body">
        <Lotto />
      </div>
    </div>
  );
};

export default ScreenLotto;

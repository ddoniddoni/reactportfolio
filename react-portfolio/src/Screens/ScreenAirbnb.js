import React from "react";
import "../Screen.css";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import ScreenView from "../ScreenView";
import ScreensDes from "../ScreenDes";

const ScreenAirbnb = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__headerInfo">
          <h3>Airbnb-Clone</h3>
          <p>React를 이용한 Airbnb UI</p>
        </div>

        <div className="screen__headerRight">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="screen__body">
        <ScreenView
          src="data:image/jpeg;base64,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"
          alt="profile"
          title="Airbnb"
          href="https://airbnb-clone-a2620.web.app"
        />
        <ScreensDes
          desOne="MaterialUI, ReactRouter사용"
          desTwo="React Date Picker를 이용한 달력 표시"
          desThree="반응형 디자인"
          desFour="Firebase를 이용한 호스팅"
        />
      </div>
    </div>
  );
};

export default ScreenAirbnb;

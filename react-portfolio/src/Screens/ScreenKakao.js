import React from "react";
import "../Screen.css";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import ScreenView from "../ScreenView";

const ScreenKakao = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__headerInfo">
          <h3>Kakao-Clone</h3>
          <p>Html과 Css를 이용한 Kakaotalk</p>
        </div>

        <div className="screen__headerRight">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="screen__body">
        <ScreenView
          src="https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
          alt="profile"
          title="Kakaotalk"
          href="https://ddoniddoni.github.io/kakao-clone-v2/"
        />
      </div>
    </div>
  );
};

export default ScreenKakao;

import React from "react";
import "../Screen.css";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import ScreenView from "../ScreenView";
import ScreensDes from "../ScreenDes";

const ScreenNetflix = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__headerInfo">
          <h3>Netflix-Clone</h3>
          <p>React를 이용한 Netflix UI</p>
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
          title="Netflix"
          href="https://netflix-clone-6d682.web.app"
        />
        <ScreensDes
          desOne="TMDB(TheMovieDB)에서 영화정보 가져오기"
          desTwo="FireBase를 이용한 Hosting"
          desThree="React를 이용한 UI 구현"
        />
      </div>
    </div>
  );
};

export default ScreenNetflix;

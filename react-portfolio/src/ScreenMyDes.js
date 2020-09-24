import React from "react";
import "./ScreenMyDes.css";

const ScreenMyDes = () => {
  return (
    <div className="screenMyDes">
      <h1 className="screenMyDes__text">Resume</h1>
      <div className="screenMyDes__top">
        <ul className="screenMyDes__list">
          <h2>소개</h2>
          <li>이름 : 박상돈</li>
          <li>생년월일 : 1992.07.23</li>
          <li>대학교 : 신한대학교 컴퓨터공학과 졸업 (2018.02)</li>
          <li>Email : psdkei@naver.com</li>
          <li>
            Github :
            <a
              href="https://www.github.com/ddoniddoni"
              target="_blank"
              rel="noopener noreferrer"
            >
              　Click!
            </a>
          </li>
          <h2>기술</h2>
        </ul>
      </div>
      <div className="screenMyDes__bottom">
        <img
          src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"
          alt="Html"
        />
        <img
          src="https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png"
          alt="Css"
        />
        <img
          src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png"
          alt="Javascript"
        />
        <img
          src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
          alt="React"
        />
      </div>
      <div className="screenMyDes__bottom">
        <img
          src="https://seeklogo.com/images/N/nodejs-logo-54107C5EDD-seeklogo.com.png"
          alt="Html"
        />
        <img
          src="https://seeklogo.com/images/P/pug-logo-86917DC6BA-seeklogo.com.png"
          alt="Css"
        />
        <img
          src="https://seeklogo.com/images/E/es6-logo-B30B258C52-seeklogo.com.png"
          alt="Javascript"
        />
        <img
          src="https://seeklogo.com/images/M/mongodb-logo-4A71340576-seeklogo.com.png"
          alt="React"
        />
      </div>
    </div>
  );
};

export default ScreenMyDes;

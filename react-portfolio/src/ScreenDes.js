import React from "react";
import "./ScreenDes.css";

const ScreensDes = ({ desOne, desTwo, desThree, desFour }) => {
  return (
    <div className="screenDes">
      <h3>소개</h3>
      <ul className="screenDes__list">
        <li>{desOne}</li>
        <li>{desTwo}</li>
        <li>{desThree}</li>
        <li>{desFour}</li>
      </ul>
    </div>
  );
};

export default ScreensDes;

import React from "react";
import "./ScreenView.css";

const ScreenView = ({ src, alt }) => {
  return (
    <div className="screenView">
      <div className="screenView__header">
        <img className="screenView__image" src={src} alt={alt} />
        <div className="screenView__click">Click!</div>
      </div>
    </div>
  );
};

export default ScreenView;

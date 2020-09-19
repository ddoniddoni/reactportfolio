import React from "react";
import "./ScreenView.css";

const ScreenView = ({ src, alt }) => {
  return (
    <div className="screenView">
      <img className="screenView__image" src={src} alt={alt} />
    </div>
  );
};

export default ScreenView;

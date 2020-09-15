import React from "react";
import "./Content.css";

const Content = ({ image, title }) => {
  return (
    <div className="content">
      <div className="content__item">
        <img className="content__image" src={image} alt={title}></img>
        <h3 className="content__title">{title}</h3>
      </div>
    </div>
  );
};

export default Content;

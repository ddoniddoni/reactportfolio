import React from "react";
import "./ScreenView.css";
import LinkIcon from "@material-ui/icons/Link";
import { IconButton } from "@material-ui/core";

const ScreenView = ({ src, alt, title, href }) => {
  return (
    <div className="screenView">
      <div className="screenView__header">
        <IconButton href={href} target="_blank">
          <img className="screenView__image" src={src} alt={alt} />
        </IconButton>
        <div className="screenView__title">{title}</div>
        <IconButton>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <LinkIcon fontSize="large" />
          </a>
        </IconButton>
      </div>
    </div>
  );
};

export default ScreenView;

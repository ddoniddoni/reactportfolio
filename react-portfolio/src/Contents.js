import React from "react";
import Content from "./Content";
import "./Contents.css";

const Contents = () => {
  return (
    <div className="contents">
      <Content
        image="https://d32gkk464bsqbe.cloudfront.net/te-ikkme3aIRBuR2nbbGpIqBLCg=/1000x600/contents/o/cf8bf0a5833bcbf72491dd0266acbe2ae45b3bfa.jpeg"
        title="NETFLIX"
      />
      <Content
        image="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/83/e5/f2/83e5f20c-7412-a48a-0aff-8fde63c63d07/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
        title="TINDER"
      />
    </div>
  );
};

export default Contents;

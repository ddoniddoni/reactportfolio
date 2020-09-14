import React, { useEffect, useState } from "react";
import "./Nav.css";
import LocalPostOffice from "@material-ui/icons/LocalPostOffice";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://avatars2.githubusercontent.com/u/33341413?s=460&u=7f26c34ba6d2bc1b40c2fa5c6193411fe1723874&v=4"
        alt="Profie"
      />
      <LocalPostOffice className="nav__mail" />
    </div>
  );
};

export default Nav;

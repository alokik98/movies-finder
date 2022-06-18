import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../images/logo.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="logo" />
        </Link>
        <Link to="/signin">
          <button className="nav__avatar">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

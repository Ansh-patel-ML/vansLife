import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header--container">
      <Link to="/">
        <img src={logo} alt="" className="header--logo" />
      </Link>
      <div className="header--navigation">
        <Link to="/about" className="header--link">
          About
        </Link>
        <Link to="/vans" className="header--link">
          Vans
        </Link>
      </div>
    </div>
  );
};

export default Header;

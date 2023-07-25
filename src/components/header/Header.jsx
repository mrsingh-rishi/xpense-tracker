import React from "react";
import logo from "./credit-cards.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpensr. <img src={logo} className="logo" />
        </div>
        <div className="header-button">
          <a href="https://github.com/mrsingh-rishi" target="_blank">
            <i class="devicon-github-original colored"></i>Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

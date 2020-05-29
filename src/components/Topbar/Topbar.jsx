import React from "react";

// import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";

import "./Topbar.scss";

const Topbar = () => (
  <header className="topbar">

    <div className="topbar__mobile-menu">
      <i className="material-icons">menu</i>
    </div>

    <picture className="topbar__logo">
      <LogoSvg />
    </picture>
    
    <div className="topbar__mobile-icons-container">
      <div>
        <i className="material-icons">search</i>
      </div>
      <div>
        <i className="material-icons">local_mall</i>
      </div>
    </div>
  
  </header>
);

export default Topbar;

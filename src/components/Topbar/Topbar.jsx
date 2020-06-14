import React, { useState } from "react";

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import Burger from "../Burger";
import Menu from "../Menu";

import "./Topbar.scss";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar__mobile-menu">
        <Burger open={open} setOpen={setOpen} />
      </div>
      <Menu open={open} setOpen={setOpen} />

      <Link to="/" className="topbar__logo">
        <LogoSvg />
      </Link>

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
};

export default Topbar;

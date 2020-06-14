import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import Burger from "../Burger";
import Menu from "../Menu";

import "./Topbar.scss";

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
        <Link to="/carrinho" className="topbar__icon">
          <i className="material-icons">local_mall</i>
        </Link>
      </div>
    </header>
  );
};

export default Topbar;

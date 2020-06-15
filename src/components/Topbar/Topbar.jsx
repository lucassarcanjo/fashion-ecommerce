import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import Burger from "../Burger";
import Menu from "../Menu";

import "./Topbar.scss";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__menu">
          <Burger open={open} setOpen={setOpen} />
        </div>
        <Menu open={open} setOpen={setOpen} />

        <Link to="/" className="topbar__logo" alt="Homepage">
          <LogoSvg />
        </Link>

        <div className="topbar__icons-container">
          <Link
            to="/carrinho"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
            }}
          >
            <FiShoppingBag size={25} title="Carrinho" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

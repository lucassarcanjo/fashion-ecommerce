import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

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
        <Link to="/produtos/buscar" className="topbar__icon">
          <FiSearch size={25} title="Busca" />
        </Link>
        <Link to="/carrinho" className="topbar__icon">
          <FiShoppingBag size={25} title="Carrinho" />
        </Link>
      </div>
    </header>
  );
};

export default Topbar;

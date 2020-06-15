import React from "react";
import { bool } from "prop-types";

import { StyledMenu, MenuLink, MenuWrapperBlur } from "./Menu.styled";

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <MenuLink
        to="/"
        className="menu-item"
        tabIndex={tabIndex}
        onClick={handleClick}
      >
        Home
      </MenuLink>
      <MenuLink
        to="/produtos/buscar"
        className="menu-item"
        tabIndex={tabIndex}
        onClick={handleClick}
      >
        Pesquisar
      </MenuLink>
      <MenuLink
        to="/produtos/sale"
        className="menu-item"
        tabIndex={tabIndex}
        onClick={handleClick}
      >
        Ofertas
      </MenuLink>
      <MenuLink
        to="/produtos/latest"
        className="menu-item"
        tabIndex={tabIndex}
        onClick={handleClick}
      >
        Lançamentos
      </MenuLink>
      <MenuLink
        to="/produtos/all"
        className="menu-item"
        tabIndex={tabIndex}
        onClick={handleClick}
      >
        Todos os Produtos
      </MenuLink>
      

      <MenuWrapperBlur isVisible={open} />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

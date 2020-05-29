import React from "react";
import { bool } from "prop-types";

import { StyledMenu, MenuLink, MenuWrapperBlur } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {/* <div> */}
        <MenuLink to="/" className="menu-item" tabIndex={tabIndex}>
          Ofertas
        </MenuLink>
      {/* </div> */}

      {/* <div> */}
        <MenuLink to="/about" className="menu-item" tabIndex={tabIndex}>
          Roupas
        </MenuLink>
      {/* </div> */}
      {/* <div> */}
        <MenuLink to="/pricing" className="menu-item" tabIndex={tabIndex}>
          Bolsas
        </MenuLink>
      {/* </div> */}
      {/* <div> */}
        <MenuLink to="/contact" className="menu-item" tabIndex={tabIndex}>
          Óculos
        </MenuLink>
      {/* </div> */}

      <MenuWrapperBlur isVisible={open} />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

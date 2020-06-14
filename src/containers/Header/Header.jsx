import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <h3>So new, So you</h3>
        <p>Our latest drop is filled with springly dresses you'll love.</p>
        <div className="header__button">
          <Link
            to="/produtos/latest"
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
            }}
          >
            <span>Lançamentos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h3>So new, So you</h3>
        <p>Our latest drop is filled with springly dresses you'll love.</p>
        <button className="cta-button">Shop new arrivals</button>
      </div>
    </div>
  );
}

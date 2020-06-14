import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        Made with&nbsp;
        <span role="img" aria-label="love">
          ❤️
        </span>
        &nbsp;by&nbsp;
        <a
          href="https://github.com/lucassarcanjo"
          target="_blank"
          rel="noreferrer noopener"
        >
          &nbsp;Lucas Arcanjo
        </a>
      </div>
    </footer>
  );
};

export default Footer;

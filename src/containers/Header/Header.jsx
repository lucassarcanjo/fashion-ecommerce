import React from "react";
import { Link } from "react-router-dom";

// import headerImg from "../../assets/img/header-image.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      {/* <picture className="header__bg">
        <img src={headerImg} alt="Fashion" />
        <img className="blur-filter" src={headerImg} alt="Fashion" />
      </picture> */}
      <div className="header__container">
        <div>
          <h3>So new, So you</h3>
          <p>Ser a melhor verão de si mesma nunca foi tão fácil.</p>
        </div>
        <div className="header__button">
          <Link
            to="/produtos/latest"
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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

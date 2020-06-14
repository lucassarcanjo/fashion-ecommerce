import React from "react";
import { Link } from "react-router-dom";

import "./BuyConfirmBox.scss";

const BuyConfirmBox = ({ handleClick }) => {
  return (
    <div className="overlay">
      <section className="confirm-box">
        <div className="confirm-box__description">
          <div>
            <span>Produto adicionado ao carrinho.</span>
          </div>
          <div onClick={handleClick}>
            <i className="material-icons">close</i>
          </div>
        </div>
        <div className="confirm-box__button confirm-box__button--outlined">
          <Link
            to="/produtos/all"
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Continuar Comprando</span>
          </Link>
        </div>
        <div className="confirm-box__button">
          <Link
            to="/carrinho"
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Ver Carrinho</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BuyConfirmBox;

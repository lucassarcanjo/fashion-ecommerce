import React from "react";

import emptyCartImg from "../../assets/img/empty-cart.svg";
import "./EmptyCart.scss";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <img src={emptyCartImg} alt="Carrinho Vazio" />
      <h2>Seu carrinho está vazio <span role="img">😕</span></h2>
    </section>
  );
};

export default EmptyCart;

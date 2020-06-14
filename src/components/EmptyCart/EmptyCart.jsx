import React from "react";

import emptyCartImg from "../../assets/img/empty-cart.jpeg";
import "./EmptyCart.scss";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <img src={emptyCartImg} alt="Carrinho Vazio" />
      <h2>Seu carrinho está vazio</h2>
    </section>
  );
};

export default EmptyCart;

import React from "react";

import "./Cart.scss";
import ProductList from "../../components/ProductList/ProductList";
import Payment from "../../components/Payment/Payment";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <div className="cart__title">
          <h1>Sacola de compras</h1>
        </div>
        <ProductList />
      </div>

      <Payment />
      {/* Caroussel: pessoas também viram... */}
    </>
  );
};

export default Cart;

import React from "react";
import { useSelector } from "react-redux";

import { ProductList, Payment, EmptyCart } from "../../components";

import "./Cart.scss";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__title">
          <h1>Sacola</h1>
        </div>
        {items.length ? (
          <>
            <ProductList products={items} />
            <Payment products={items} />
          </>
        ) : (
          <EmptyCart />
        )}

        {/* Caroussel: voce pode gostar de... */}
      </div>
    </div>
  );
};

export default Cart;

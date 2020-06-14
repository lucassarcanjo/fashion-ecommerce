import React from "react";

import "./Cart.scss";
import ProductList from "../../components/ProductList/ProductList";
import Payment from "../../components/Payment/Payment";
import { useSelector } from "react-redux";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <div className="cart">
        <div className="cart__title">
          <h1>Sacola</h1>
        </div>
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
    </>
  );
};

export default Cart;

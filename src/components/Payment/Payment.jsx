import React from "react";
import PropTypes from "prop-types";

import "./Payment.scss";

const Payment = ({}) => {
  return (
    <div className="payment">
      <div className="payment__wrapper">
        <div className="payment__description">
          <h4>Subtotal</h4>
          <p>Entrega</p>
          <p>Imposto estimado</p>
        </div>
        <div className="payment__description payment__description--right-align">
          <h4>$199.99</h4>
          <p>Free</p>
          <p>$20.19</p>
        </div>
      </div>
      <hr></hr>
      <div className="payment__wrapper">
        <div className="payment__description">
          <h2>Total estimado</h2>
        </div>
        <div className="payment__description payment__description--right-align">
          <h2>$220,00</h2>
        </div>
      </div>

      <a href="" className="payment__button">
        <span>Checkout</span>
      </a>
    </div>
  );
};

Payment.propTypes = {};

export default Payment;

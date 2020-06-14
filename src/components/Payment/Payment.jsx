import React from "react";
import PropTypes from "prop-types";

import "./Payment.scss";

const Payment = ({ products }) => {
  const deliveryFee = 0;

  const subtotal = products.reduce((acum, { actual_price, quantity }) => {
    const price = parseFloat(actual_price.slice(3).replace(",", "."));
    return acum + quantity * price;
  }, 0);

  return (
    <div className="payment">
      <div className="payment__info">
        <div className="payment__row">
          <div className="payment__description">
            <h4>Subtotal</h4>
            <p>Entrega</p>
          </div>
          <div className="payment__description payment__description--right-align">
            <h4>R$ {subtotal.toFixed(2).replace(".", ",")}</h4>
            <p>{deliveryFee ? deliveryFee : <>Grátis</>}</p>
          </div>
        </div>
        <hr></hr>
        <div className="payment__row">
          <div className="payment__description">
            <h2>Total</h2>
          </div>
          <div className="payment__description payment__description--right-align">
            <h2>R$ {subtotal.toFixed(2).replace(".", ",")}</h2>
          </div>
        </div>

        <button type="button" className="payment__button">
          Checkout
        </button>
      </div>
      <div className="payment__help">
        <p>Precisa de ajuda? Ligue para (31) 0000-0000</p>
        <a
          href="https://github.com/lucassarcanjo"
          target="_blank"
          rel="noreferrer noopener"
        >
          Fale Conosco
        </a>
      </div>
    </div>
  );
};

Payment.propTypes = {};

export default Payment;

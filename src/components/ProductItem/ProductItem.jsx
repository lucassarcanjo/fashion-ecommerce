import React from "react";
import PropTypes from "prop-types";

import "./ProductItem.scss";

const ProductItem = ({ product, size, qty }) => {
  return (
    <li className="product__list__item">
      <div className="product__list__thumb">
        <img
          src="https://n.nordstrommedia.com/id/sr3/697415f0-6435-4eff-8d5a-43b563a33e1f.jpeg?w=156&h=240"
          alt=""
        />
      </div>
      <div className="product__list__info">
        <h3>Regata alcinha folk</h3>
        <p>
          Tamanho: P <br />
          Cor: LICORE
        </p>
        <div className="product__list__price">
          <span>$99.95</span>
        </div>
        <div className="product__list__qty">
          <select name="Qty" id="Qty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="product__list__shipping">
          <div className="product__list__shipping-icon">
            <i className="material-icons">local_shipping</i>
          </div>
          <div className="product__list__shipping-info">
            <h4>Entrega</h4>
            <p>Ter, 18/06 - Ter, 23/06</p>
          </div>
        </div>
        <div className="product__list__shipping">
          <div className="product__list__shipping-icon">
            <i className="material-icons">location_on</i>
          </div>
          <div className="product__list__shipping-info">
            <h4>Retire na loja</h4>
            <p>Hoje, 13/06</p>
          </div>
        </div>
        <div className="product__list__actions">
          <button>Remover</button>
          <button>Salvar para depois</button>
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {};

export default ProductItem;

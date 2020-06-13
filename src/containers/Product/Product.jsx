import React from "react";

import "./Product.scss";

import testImg from "../../assets/img/product-image.jpeg";
import Select from "../../components/Select";

const Product = () => {
  return (
    <div className="product">
      <h1 className="product__title">Madewell x Vans Tenis dahora</h1>
      <picture className="product__picture">
        <img src={testImg} alt="" />
      </picture>
      <div className="product__price">
        <span>BRL 353,54</span>
      </div>
      <div className="product__section">
        <h3 className="product__subtitle">Tamanho</h3>
        <div className="product__section-wrapper">
          <button className="product__section-button">P</button>
          <button className="product__section-button product__section-button--active">
            M
          </button>
          <button className="product__section-button">G</button>
        </div>
      </div>
      <div className="product__section">
        <h3 className="product__subtitle">Quantidade</h3>
        <div className="product__section-wrapper">
          <Select />
        </div>
      </div>
      <div className="product__button">
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Product;

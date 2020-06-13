import React from "react";
import { useSelector } from "react-redux";

import { qtyList } from "../../constants";

import "./Product.scss";

import defaultImg from "../../assets/img/product-image.jpeg";
import Select from "../../components/Select";

const Product = ({ id }) => {
  const { allProducts } = useSelector((state) => state.products);
  const product = allProducts.find((item) => item.id === id);

  return (
    <div className="product">
      <h1 className="product__title">{product.name}</h1>
      <picture className="product__picture">
        <img
          src={product.image ? product.image : defaultImg}
          alt={product.name}
        />
      </picture>
      <div className="product__price">
        <span>{product.actual_price}</span>
      </div>
      <div className="product__section">
        <h3 className="product__subtitle">Tamanho</h3>
        <div className="product__section-wrapper">
          {product.sizes.map((size) => {
            if (size.available) {
              return (
                <button className="product__section-button">{size.size}</button>
              );
            }
            return (
              // TODO Botao nao clicavel
              <button className="product__section-button">{size.size}</button>
            );
          })}
        </div>
      </div>
      <div className="product__section">
        <h3 className="product__subtitle">Quantidade</h3>
        <div className="product__section-wrapper">
          <Select name="Qty" options={qtyList} />
        </div>
      </div>
      <div className="product__button">
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Product;

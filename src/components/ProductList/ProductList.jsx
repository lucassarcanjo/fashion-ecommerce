import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../ProductItem/ProductItem";

import "./ProductList.scss";

const ProductList = ({ products }) => {
  return (
    <ul className="product__list">
      {products.map((item) => (
        <ProductItem product={item} key={item.sku} />
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;

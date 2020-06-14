import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  return (
    <ul className="product__list">
      {products.map((item) => (
        <ProductItem product={item} key={item.sku} />
      ))}
    </ul>
  );
};

ProductList.propTypes = {};

export default ProductList;

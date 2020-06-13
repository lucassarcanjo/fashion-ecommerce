import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  return (
    <ul className="product__list">
      <ProductItem />
      <ProductItem />
    </ul>
  );
};

ProductList.propTypes = {};

export default ProductList;

import React from "react";
import Product from "../../containers/Product/Product";
import { useParams } from "react-router-dom";

const ProductRoute = () => {
  const { id } = useParams();

  return (
    <>
      <Product id={parseInt(id)} />
    </>
  );
};

export default ProductRoute;

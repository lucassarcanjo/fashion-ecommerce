import React from "react";
import { useParams } from "react-router-dom";

import { Product } from "../../containers";

const ProductRoute = () => {
  const { id } = useParams();

  return (
    <>
      <Product id={parseInt(id)} />
    </>
  );
};

export default ProductRoute;

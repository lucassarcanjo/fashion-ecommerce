import React from "react";

import "./ProductsRoute.scss";
import Filters from "../../containers/Filters";
import Card from "../../components/Card";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { sectionNames } from "../../constants";

const ProductsRoute = () => {
  const { list } = useParams();

  const productList = useSelector((state) => state.products[list]);

  console.log(productList);

  return (
    <div className="list">
      {productList ? (
        <>
          <div className="list__title">
            {productList.length} resultados em <b>{sectionNames[list]}</b>
          </div>
          {/* <Filters /> */}
          <div className="list__container">
            {productList.map((item) => (
              <Card
                description={item.name}
                price={item.actual_price}
                thumb={item.image}
                isSale={item.on_sale}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        </>
      ) : (
        <h1>Ah não!</h1>
      )}
    </div>
  );
};

export default ProductsRoute;

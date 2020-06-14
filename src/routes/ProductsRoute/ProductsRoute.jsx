import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Filters } from "../../containers";
import { Card, SearchBar } from "../../components";

import { sectionNames } from "../../constants";

import "./ProductsRoute.scss";

const ProductsRoute = () => {
  const { list } = useParams();
  const productList = useSelector((state) => state.products[list]);
  const allProducts = useSelector((state) => state.products.all);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [input, setInput] = useState("");

  const searchActive = list === "buscar";

  useEffect(() => {
    if (!searchActive && productList) {
      setfilteredProducts(productList);
    }
  }, [productList, searchActive]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setInput(query);

    if (input.length > 1) {
      setfilteredProducts(
        allProducts.filter((item) => {
          if (query) {
            return item.name.toLowerCase().includes(input.toLowerCase());
          }
          return false;
        })
      );
    } else {
      setfilteredProducts([]);
    }
  };

  return (
    <div className="list">
      <div className="list__wrapper">
        {searchActive ? (
          <SearchBar handleSearch={handleSearch} value={input} />
        ) : (
          <></>
        )}
        <div className="list__title">
          {filteredProducts.length} resultados{" "}
          {!searchActive ? (
            <>
              em <b>{sectionNames[list]}</b>
            </>
          ) : (
            <></>
          )}
        </div>
        {/* <Filters /> */}
        <div className="list__container">
          {filteredProducts.map((item) => (
            <Card
              description={item.name}
              price={item.actual_price}
              thumb={item.image}
              width={42}
              isSale={item.on_sale}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsRoute;

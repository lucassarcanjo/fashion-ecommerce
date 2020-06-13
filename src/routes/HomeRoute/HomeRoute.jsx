import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../containers/Header/Header";
import Recommendations from "../../containers/Recommendations";
import Caroussel from "../../containers/Caroussel/Caroussel";

import { getApiData } from "../../services/api";
import { apiUrl } from "../../constants";

import { setProducts } from "../../actions/products";

const HomeRoute = () => {
  const { recommend, latest } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getApiData(apiUrl).then((data) => {
      const products = {
        allProducts: data,
        latest: data.slice(0, 10),
        recommend: {
          black: data.filter((item) => item.color.includes("PRETO")),
          sale: data.filter((item) => item.on_sale === true),
        },
      };

      dispatch(setProducts(products));
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Recommendations cardData={recommend} />
      <Caroussel title="Ultimas novidades" cardData={latest} />
    </React.Fragment>
  );
};

export default HomeRoute;

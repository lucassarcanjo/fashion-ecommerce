import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../actions/products";

import { Header, Carousel } from "../../containers";
import { RecommendationCard, Footer } from "../../components";

import { getApiData } from "../../services/api";
import { apiUrl } from "../../constants";

import "./HomeRoute.scss";

const HomeRoute = () => {
  const { black, sale, latest } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getApiData(apiUrl).then((data) => {
      //setting id on each element from array of objects
      data.forEach((item, i) => (item.id = i + 1));

      // Lists
      const products = {
        all: data,
        latest: data.slice(0, 10),
        black: data.filter((item) => item.color.includes("PRETO")),
        sale: data.filter((item) => item.on_sale === true),
      };

      dispatch(setProducts(products));
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      {sale.length ? (
        <>
          <section className="recommendation">
            <div className="recommendation__wrapper">
              <RecommendationCard
                description="Produtos que nós amamos"
                cta="em oferta"
                thumb={sale[5].image}
                link="/produtos/sale"
              />
              <RecommendationCard
                description="Aquele pretinho básico que"
                cta="nunca sai de moda"
                thumb={black[2].image}
                link="/produtos/black"
              />
            </div>
          </section>
          <Carousel title="Lançamentos" cards={latest} />
        </>
      ) : (
        <h1>Loading</h1>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default HomeRoute;

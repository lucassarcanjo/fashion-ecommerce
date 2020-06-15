import React from "react";

import Card from "../../components/Card";
import "./Carousel.scss";

const Carousel = ({ title, cards }) => {
  return (
    <section className="carousel">
      <div className="carousel__wrapper">
        <header className="carousel__header">
          <h2>{title}</h2>
        </header>

        <div className="carousel__box">
          <div className="carousel__list">
            {cards.map((item) => (
              <Card
                description={item.name}
                price={item.actual_price}
                thumb={item.image}
                isSale={item.on_sale}
                width={60}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

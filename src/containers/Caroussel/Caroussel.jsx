import React from "react";

import Card from "../../components/Card";
import "./Caroussel.scss";

const Caroussel = ({ title, cards }) => {
  return (
    <section className="caroussel">
      <div className="caroussel__wrapper">
        <header className="caroussel__header">
          <h2>{title}</h2>
        </header>

        <div className="caroussel__box">
          <div className="caroussel__list">
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

export default Caroussel;

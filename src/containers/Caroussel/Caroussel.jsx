import React from "react";

import Card from "../../components/Card";
import "./Caroussel.scss";

const Caroussel = ({ title, cards }) => {
  return (
    <section className="caroussel">
      <header className="caroussel__header">
        <h3>{title}</h3>
      </header>

      <div className="caroussel__box">
        <div className="caroussel__list">
          {cards.map((item) => (
            <Card
              description={item.name}
              price={item.actual_price}
              thumb={item.image}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Caroussel;

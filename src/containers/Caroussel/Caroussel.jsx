import React from "react";

import Card from "../../components/Card";
import "./Caroussel.scss";

const Caroussel = ({ title, cardData }) => {
  return (
    <section className="caroussel">
      <header className="caroussel__header">
        <h3>{title}</h3>
      </header>

      <div className="caroussel__box">
        <div className="caroussel__list">
          {cardData.map((item) => (
            <Card
              description={item.name}
              price={item.actual_price}
              thumb={item.image}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Caroussel;

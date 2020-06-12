import React from "react";

import Card from "../../components/Card";

import "./Caroussel.scss";

import testImg from "../../assets/img/product-image.jpeg";

const Caroussel = () => {
  return (
    <section className="caroussel">
      <header className="caroussel__header">
        <h3>Latest Arrivals</h3>
      </header>

      <div className="caroussel__box">
        <div className="caroussel__list">
          <Card description="Free People" price="$148,00" thumb={testImg} />
          <Card description="Free People" price="$148,00" thumb={testImg} />
          <Card description="Free People" price="$148,00" thumb={testImg} />
          <Card description="Free People" price="$148,00" thumb={testImg} />
          <Card description="Free People" price="$148,00" thumb={testImg} />
          <Card description="Free People" price="$148,00" thumb={testImg} />
          <Card description="Free People" price="$148,00" thumb={testImg} />
          <Card description="Free People" price="$148,00" thumb={testImg} />
        </div>
      </div>
    </section>
  );
};

export default Caroussel;

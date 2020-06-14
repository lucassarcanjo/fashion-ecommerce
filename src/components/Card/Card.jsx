import React from "react";
import { Link } from "react-router-dom";

import defaultImg from "../../assets/img/product-image.jpeg";
import { convertToTitleCase } from "../../utils";

import "./Card.scss";

const Card = ({ description, price, thumb, id, isSale }) => {
  const saleBanner = isSale ? (
    <p className="card__sale-banner">
      <i className="material-icons card__sale-banner">whatshot</i> OFERTA
    </p>
  ) : (
    <></>
  );

  return (
    <article className="card">
      <Link
        to={`/produto/${id}`}
        style={{
          textDecoration: "none",
          display: "inline-block",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <div className="card__picture">
            <img src={thumb ? thumb : defaultImg} alt={description} />
          </div>

          <footer>
            {saleBanner}
            <p className="card__description">
              {convertToTitleCase(description)}
            </p>
            <div className="card__price-container">
              <span className="card__price">{price}</span>
            </div>
          </footer>
        </div>
      </Link>
    </article>
  );
};

export default Card;

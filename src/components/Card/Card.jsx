import React from "react";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";

import { convertToTitleCase } from "../../utils";
import defaultImg from "../../assets/img/product-image.jpeg";

import "./Card.scss";

const Card = ({ description, price, thumb, id, isSale, width }) => {
  const saleBanner = isSale ? (
    <p className="card__sale-banner">
      <AiFillFire size={12} title="Oferta" /> OFERTA
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
            <img
              src={thumb ? thumb : defaultImg}
              alt={description}
              style={{ width: `${width}vw`, maxWidth: "300px" }}
            />
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

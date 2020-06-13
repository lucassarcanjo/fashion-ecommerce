import React from "react";

import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ description, price, thumb, id }) => {
  return (
    <div className="card-caroussel">
      <Link to={`/produtos/${id}`}>
        <div className="card-caroussel__picture">
          <img src={thumb} alt={description} />
        </div>

        <footer>
          <p className="card-caroussel__description">{description}</p>
          <div className="card-caroussel__price-container">
            <span className="card-caroussel__price">{price}</span>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Card;

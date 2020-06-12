import React from "react";

import "./Card.scss";

const Card = ({ description, price, thumb }) => {
  return (
    <div className="card-caroussel">
      <div className="card-caroussel__picture">
        <img src={thumb} alt={description} />
      </div>

      <footer>
        <p className="card-caroussel__description">{description}</p>
        <div className="card-caroussel__price-container">
          <span className="card-caroussel__price">{price}</span>
        </div>
      </footer>
    </div>
  );
};

export default Card;

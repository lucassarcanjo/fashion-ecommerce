import React from "react";

import "./Card.scss";

const Card = ({ description, price, thumb }) => {
  return (
    <div className="card-caroussel">
      <div class="card-caroussel__picture">
        <img src={thumb} alt={description} />
      </div>

      <footer>
        <p class="card-caroussel__description">{description}</p>
        <div class="card-caroussel__price-container">
          <span class="card-caroussel__price">{price}</span>
        </div>
      </footer>
    </div>
  );
};

export default Card;

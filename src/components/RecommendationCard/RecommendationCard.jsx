import React from "react";

import "./RecommendationCard.scss";

const RecommendationCard = ({ description, cta, thumb }) => {
  return (
    <section className="card">
      <picture className="card__picture">
        <img src={thumb} alt={description} />
      </picture>
      <p className="card__description">{description}</p>

      <div className="card__cta">
        <h4 className="card__cta-description">{cta}</h4>
        <i className="material-icons card__cta-icon">play_arrow</i>
      </div>
    </section>
  );
};

export default RecommendationCard;

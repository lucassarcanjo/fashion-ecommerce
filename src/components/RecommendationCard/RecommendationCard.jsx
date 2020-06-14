import React from "react";
import { Link } from "react-router-dom";

import "./RecommendationCard.scss";

const RecommendationCard = ({ description, cta, thumb, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <section className="recommended-card">
        <picture className="recommended-card__picture">
          <img src={thumb} alt={description} />
        </picture>
        <p className="recommended-card__description">{description}</p>

        <div className="recommended-card__cta">
          <h4 className="recommended-card__cta-description">{cta}</h4>
          <i className="material-icons recommended-card__cta-icon">
            play_arrow
          </i>
        </div>
      </section>
    </Link>
  );
};

export default RecommendationCard;

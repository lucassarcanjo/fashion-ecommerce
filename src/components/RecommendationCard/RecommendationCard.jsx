import React from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

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
          <div>
            <MdPlayArrow title="Ir" size={20} />
          </div>
        </div>
      </section>
    </Link>
  );
};

export default RecommendationCard;

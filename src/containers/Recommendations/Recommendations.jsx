import React from "react";
import RecommendationCard from "../../components/RecommendationCard";

import cardImage from "../../assets/img/card-image.jpeg";

const Recommendations = () => {
  return (
    <article>
      <RecommendationCard
        description="Outfits we're oficially obsessed with"
        cta="looks we love"
        thumb={cardImage}
      />
      <RecommendationCard
        description="Outfits we're oficially obsessed with"
        cta="looks we love"
        thumb={cardImage}
      />
    </article>
  );
};

export default Recommendations;

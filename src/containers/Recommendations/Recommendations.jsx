import React from "react";
import RecommendationCard from "../../components/RecommendationCard";

const Recommendations = ({ cardData }) => {
  return (
    <article>
      {Object.keys(cardData).length ? (
        <>
          <RecommendationCard
            description="Produtos que nós amamos"
            cta="em oferta"
            thumb={cardData.sale[3].image}
          />
          <RecommendationCard
            description="Aquele pretinho básico que"
            cta="nunca sai de moda"
            thumb={cardData.black[2].image}
          />
        </>
      ) : (
        <></>
      )}
    </article>
  );
};

export default Recommendations;

import React from "react";
import Header from "../../containers/Header/Header";
import Recommendations from "../../containers/Recommendations";
import Caroussel from "../../containers/Caroussel/Caroussel";

const HomeRoute = () => {
  return (
    <React.Fragment>
      <Header />
      <Recommendations />
      <Caroussel />
    </React.Fragment>
  );
};

export default HomeRoute;

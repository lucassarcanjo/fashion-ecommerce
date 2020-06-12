import React from "react";
import Header from "../../containers/Header/Header";
import Recommendations from "../../containers/Recommendations";

const HomeRoute = () => {
  return (
    <React.Fragment>
      <Header />
      <Recommendations />
    </React.Fragment>
  );
};

export default HomeRoute;

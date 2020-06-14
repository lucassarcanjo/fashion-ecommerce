import React from "react";
import PropTypes from "prop-types";

import "./Filters.scss";
import Filter from "../../components/Filter";

const Filters = ({ filters }) => {
  return (
    <div className="filters">
      <Filter />
      <Filter />
      <Filter />
    </div>
  );
};

Filters.propTypes = {};

export default Filters;

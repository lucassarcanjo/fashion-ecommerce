import React from "react";
import PropTypes from "prop-types";

import { Filter } from "../../components";
import "./Filters.scss";

const Filters = ({ filters }) => {
  return (
    <div className="filters">
      <Filter />
      <Filter />
      <Filter />
    </div>
  );
};

Filters.propTypes = { filters: PropTypes.array.isRequired };

export default Filters;

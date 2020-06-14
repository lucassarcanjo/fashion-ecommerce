import React from "react";
import PropTypes from "prop-types";

import "./Filter.scss";

const Filter = ({ defaultValue, options }) => {
  return (
    <select name={defaultValue} className="filter-select">
      <option value="" selected disabled hidden>
        {defaultValue}
      </option>
      {options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

Filter.propTypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default Filter;

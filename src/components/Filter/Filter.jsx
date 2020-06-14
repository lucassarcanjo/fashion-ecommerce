import React from "react";
import PropTypes from "prop-types";

import "./Filter.scss";

const Filter = ({
  defaultValue = "Cor",
  options = ["azul", "laranja", "vermelho"],
}) => {
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

Filter.propTypes = {};

export default Filter;

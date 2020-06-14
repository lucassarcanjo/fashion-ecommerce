import React from "react";
import PropTypes from "prop-types";

import "./Select.scss";

const Select = ({ name, options, defaultValue = 1, handleChange }) => {
  return (
    <select
      name={name}
      id={name}
      className="select"
      onChange={handleChange}
      defaultValue={defaultValue}
    >
      {options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {};

export default Select;

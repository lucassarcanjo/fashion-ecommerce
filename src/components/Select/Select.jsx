import React from "react";
import PropTypes from "prop-types";

import "./Select.scss";

const Select = ({ name, options, preSelectedValue = 1, handleChange }) => {
  return (
    <select name={name} id={name} className="Select" onChange={handleChange}>
      {options.map((item) => {
        if (item === preSelectedValue) {
          return (
            <option value={item} selected key={item}>
              {item}
            </option>
          );
        }
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {};

export default Select;

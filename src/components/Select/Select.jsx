import React from "react";
import PropTypes from "prop-types";

import "./Select.scss";

const Select = ({ name, options, selectedValue = 1 }) => {
  return (
    <select name={name} id={name} className="Select">
      {options.map((item) => {
        if (item === selectedValue) {
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

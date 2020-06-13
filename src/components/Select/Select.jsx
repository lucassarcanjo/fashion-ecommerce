import React from "react";
import PropTypes from "prop-types";

import "./Select.scss";

const Select = ({ name, options = [1, 2, 3, 4, 5], selectedValue = 1 }) => {
  return (
    <select name="Quantity" id="Quantity" className="QtySelect">
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

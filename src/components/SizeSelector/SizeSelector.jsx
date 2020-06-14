import React from "react";
import PropTypes from "prop-types";

import "./SizeSelector.scss";

const SizeSelector = ({ sizes, selected, handleSelect }) => {
  return sizes.map((item) => {
    if (item.available) {
      if (item.size === selected) {
        return (
          <button className="size-selector size-selector--selected">
            {item.size}
          </button>
        );
      }

      return (
        <button className="size-selector" onClick={handleSelect}>
          {item.size}
        </button>
      );
    } else {
      return (
        <button className="size-selector size-selector--unactive">
          {item.size}
        </button>
      );
    }
  });
};

SizeSelector.propTypes = {};

export default SizeSelector;

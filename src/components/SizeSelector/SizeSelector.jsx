import React from "react";
import PropTypes from "prop-types";

import "./SizeSelector.scss";

const SizeSelector = ({ sizes, selected, handleSelect }) => {
  return sizes.map((item) => {
    if (item.available) {
      if (item.size === selected) {
        return (
          <button
            className="size-selector size-selector--selected"
            key={item.size}
          >
            {item.size}
          </button>
        );
      }

      return (
        <button
          className="size-selector"
          onClick={handleSelect}
          key={item.size}
        >
          {item.size}
        </button>
      );
    } else {
      return (
        <button
          className="size-selector size-selector--unactive"
          key={item.size}
        >
          {item.size}
        </button>
      );
    }
  });
};

SizeSelector.propTypes = {
  sizes: PropTypes.array.isRequired,
  selected: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
};

export default SizeSelector;

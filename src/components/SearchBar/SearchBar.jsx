import React, { useState } from "react";

import "./SearchBar.scss";

const SearchBar = ({ handleSearch, value }) => {
  return (
    <section className="searchbar">
      <input
        type="text"
        value={value}
        onChange={handleSearch}
        placeholder="Buscar produtos..."
      />
    </section>
  );
};

export default SearchBar;

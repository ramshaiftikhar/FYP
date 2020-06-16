import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, updater }) => {
  return (
    <div className="input-group md-form form-sm form-2 pl-0">
      <input
        type="text"
        className="form-control my-0 py-1 lime-border"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(event) => updater(event.target.value)}
      />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-text1">
          <i className="fas fa-search" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;

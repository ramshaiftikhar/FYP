import React from "react";

const SearchBar = ({ value, updater }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={value}
        onChange={(event) => updater(event.target.value)}
      />
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;

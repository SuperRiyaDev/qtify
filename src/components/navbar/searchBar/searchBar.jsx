import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import './searchBar.css'

const SearchBar = () => (
    <div className="searchBar-wrap">
      <input
        type="search"
        placeholder="Search for an album of your choice"
      />
      <SearchIcon className="searchBar-icon" />
    </div>
  );


export default SearchBar;

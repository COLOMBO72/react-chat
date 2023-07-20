import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <div className="search__wrapper">
      <img className="icon_search" src="icon-search.png" alt="" />
      <input type="text" />
      <img className="icon_close" src="icon-close.png" alt="" />
    </div>
  );
};

export default Search;

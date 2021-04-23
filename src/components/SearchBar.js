import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchContact } from '../redux/contactSlice';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    dispatch(searchContact(e.target.value));
  };
  return (
    <div className="searchContainer">
      <input
        onChange={(e) => handleSearchInput(e)}
        value={searchInput}
        className="search"
        type="search"
        placeholder="Search..."
      />
    </div>
  );
}
export default SearchBar;

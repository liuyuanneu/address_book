import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact, getQuery } from '../redux/contactSlice';

function SearchBar() {
  const searchInput = useSelector((state) => state.contact.query);
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    dispatch(searchContact(e.target.value));
    dispatch(getQuery(e.target.value));
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

import React from 'react';
import SearchBar from './SearchBar';
import ContacList from './ContactList';

function Home() {
  return (
    <div className="homeContainer">
      <SearchBar />
      <ContacList />
    </div>
  );
}

export default Home;

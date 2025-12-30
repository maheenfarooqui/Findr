import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search users by name..." 
        className="search-input"
        // Jab aap likhein, toh ye function App.jsx ki state update kare
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;
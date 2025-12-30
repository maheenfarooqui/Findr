import React from 'react';
import './Navbar.css';


const Navbar = ({ setShowFavs, favCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => setShowFavs(false)}>
        <img src="/logo.png" alt="Random User Logo" className="navbar-logo" />
        </div>
        <ul className="nav-links">
          <li onClick={() => setShowFavs(false)}>Home</li>
          <li onClick={() => setShowFavs(true)} className="nav-fav">Favorites
            {favCount > 0 && <span className="count-badge">{favCount}</span>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
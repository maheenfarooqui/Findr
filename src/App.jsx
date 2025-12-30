import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import Footer from './components/Footer/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavs, setShowFavs] = useState(false); // Ye zaroori hai

  // Function: Favorites mein add/remove karne ke liye
  const toggleFavorite = (user) => {
    if (favorites.some(fav => fav.login.uuid === user.login.uuid)) {
      setFavorites(favorites.filter(fav => fav.login.uuid !== user.login.uuid));
    } else {
      setFavorites([...favorites, user]);
    }
  };

  return (
    <div className="App">
      {/* 1. Navbar ko ye props lazmi bhejein */}
      <Navbar setShowFavs={setShowFavs} favCount={favorites.length} />
      
      <main className="container">
        {/* Search bar hamesha dikhega */}
        <SearchBar setSearchTerm={setSearchTerm} />

        {/* Heading change hogi view ke mutabiq */}
        <h2 style={{textAlign: 'center', margin: '20px 0', color: ' #2563EB'}}>
          {showFavs ? "Your Favorites ❤️" : "Explore Users"}
        </h2>

        {/* 2. UserList ko saari cheezein pass karein */}
        <UserList 
          searchTerm={searchTerm} 
          toggleFavorite={toggleFavorite} 
          favorites={favorites} 
          showFavs={showFavs} 
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
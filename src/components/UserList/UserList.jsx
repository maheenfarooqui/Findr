// Pehli line check karein, isme { useState, useEffect } hona zaroori hai
import React, { useState, useEffect } from 'react'; 
import UserCard from '../UserCard/UserCard';
import './UserList.css';
const UserList = ({ searchTerm, toggleFavorite, favorites, showFavs }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=12');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // --- YE LINE SABSE ZAROORI HAI ---
  // Agar showFavs true hai toh 'favorites' array use karo, warna API wala 'users'
  const currentList = showFavs ? favorites : users;

  // Ab filter 'currentList' par lagega
  const filteredUsers = currentList.filter((user) => {
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase().trim());
  });

  if (loading && !showFavs) return <div className="loader">Loading Users...</div>;

  return (
    <div className="user-list-container">
      {/* Agar filtered list khali ho (yani koi search result na ho ya favorites khali hon) */}
      {filteredUsers.length === 0 ? (
        <div className="no-results">
          {showFavs ? "No favorites added yet! ❤️" : "No users found!"}
        </div>
      ) : (
        <div className="user-grid">
          {filteredUsers.map((item) => (
            <UserCard 
              key={item.login.uuid} 
              user={item} 
              toggleFavorite={toggleFavorite} 
              isFavorite={favorites.some(fav => fav.login.uuid === item.login.uuid)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default UserList;
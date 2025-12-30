import React from 'react';
import './UserCard.css';

const UserCard = ({ user, toggleFavorite, isFavorite }) => {
  return (
    <div className="user-card">
      <button 
        className={`fav-btn ${isFavorite ? 'active' : ''}`} 
        onClick={() => toggleFavorite(user)}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <div className="card-image">
        {/* API se aane wali image */}
        <img src={user.picture.large} alt={user.name.first} />
      </div>
      
      <div className="card-info">
        <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
        <p className="email">{user.email}</p>
        
        <div className="location">
          <span>{user.location.city}, {user.location.country}</span>
        </div>
      </div>

      <button className="contact-btn">View Profile</button>
    </div>
  );
};

export default UserCard;
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="banner-image">
        <div className="profile-overlay">
          <div className="profile-image">
            <img src="Me-edited.jpg" alt="Karl Andrei Manangan" />
          </div>
        </div>
      </div>
      
      <div className="header-content">
        <div className="container">
          <div className="profile-info">
            <h1 className="name">KARL ANDREI MANANGAN</h1>
            <div className="details">
              <div className="detail-item">
                <span className="icon">🏫</span>
                <span>STUDENT</span>
              </div>
              <div className="detail-item">
                <span className="icon">📍</span>
                <span>CALOOCAN CITY, METRO MANILA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

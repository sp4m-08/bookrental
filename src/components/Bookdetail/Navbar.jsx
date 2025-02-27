import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const routeTo = (path) => {
    navigate(path);
  };

  return (
    <header className="Navbar">
      <div className="logo-container">
        <div className="logo-circle">
          <span className="logo-text">Lo</span>
        </div>
        <span className="logo-title">LOGO</span>
      </div>

      <nav className="nav-links">
        <span className="nav-link" onClick={() => routeTo('/home')}>Home</span>
        <span className="nav-link" onClick={() => routeTo('/profile')}>Profile</span>
        <span className="nav-link" onClick={() => routeTo('/wishlist')}>Wishlist</span>
      </nav>

      <div className="right-section">
        <img src="noti_bell.png" className="notification-icon" alt="Notification Bell" />
        <button
          className="upload-button"
          onClick={() => routeTo('/upload')}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#1C0071';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1C0071';
          }}
        >
          Upload Material
        </button>
      </div>
    </header>
  );
};

export default Navbar;
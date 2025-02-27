import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  

  return (
        <header className="header">
      <div className="logo-container">
        <div className="logo-circle">
          <span className="logo-text">Lo</span>
        </div>
        <span className="logo-title">LOGO</span>
      </div>

      <nav className="nav-links">
        <span className="nav-link" onClick={() => navigate('/')}>Home</span>
        <span className="nav-link" onClick={() => navigate('/profile')}>Profile</span>
        <span className="nav-link" onClick={() => navigate('/wishlist')}>Wishlist</span>
      </nav>

      <div className="right-section">
        {/* Notification Container */}
        <div 
          className="notification-container"
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <img src="noti_bell.png" className="notification-icon" alt="Notification Bell" />
          
          {showNotifications && (
            <div className="notification-box">
              <div className="notification-item">
                <p><b>Lorem ipsum dolor sit</b></p>
                <span>John Doe has requested your material</span>
                <div className="notification-actions">
                  <button className="reject-btn">Reject</button>
                  <button className="accept-btn">Accept</button>
                </div>
              </div>
              <div className="notification-item">
                <p><b>Lorem ipsum dolor sit</b></p>
                <span>John Doe has requested your material</span>
                <div className="notification-actions">
                  <button className="reject-btn">Reject</button>
                  <button className="accept-btn">Accept</button>
                </div>
              </div>
              <div className="notification-item">
                <p>You can now access <b>Lorem ipsum dolor sit</b></p>
                <span>John Doe</span> | <span>Phone Number: XXXXXXXXXX</span>
                <div>
                  <input type="checkbox" /> Please check the box if you have received it
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          className="upload-button"
          onClick={() => navigate('/upload')}
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

export default Header;
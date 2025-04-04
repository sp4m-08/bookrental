import React, { useState } from "react";
import "./UploadHeader.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-circle">
          <div className="logo-inner-circle">
            <span className="logo-text"></span>
          </div>
        </div>
        <span className="logo-title">LOGO</span>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${showMenu ? "show" : ""}`}>
        <span className="nav-link" onClick={() => { navigate("/home"); setShowMenu(false); }}>Home</span>
        <span className="nav-link" onClick={() => { navigate("/profile"); setShowMenu(false); }}>Profile</span>
        <span className="nav-link" onClick={() => { navigate("/wishlist"); setShowMenu(false); }}>WishList</span>
      </nav>

      {/* Right Section */}
      <div className="right-section">
        <div
          className="notification-container"
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <img src="noti_bell.png" className="notification-icon" alt="Notification Bell" />
          {showNotifications && (
            <div className="notification-box">
              <div className="notification-item">
                <p><b>New Request</b></p>
                <span>John Doe has requested your material</span>
                <div className="notification-actions">
                  <button className="reject-btn">Reject</button>
                  <button className="accept-btn">Accept</button>
                </div>
              </div>
              <div className="notification-item">
                <p><b>Access Granted</b></p>
                <span>You can now access the requested content</span>
                <div>
                  <input type="checkbox" /> Confirm if received
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

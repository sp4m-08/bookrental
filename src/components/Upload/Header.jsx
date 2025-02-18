import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <div className="logo-circle">
          <div className="logo-inner-circle">
            <span className="logo-text"></span>
          </div>
        </div>
        <span className="logo-title">LOGO</span>
      </div>
      <div className="nav-links">
        <NavLink>Home</NavLink>
        <NavLink>Profile</NavLink>
        
              <NavLink>WishList</NavLink>
      </div>
      <div className="right-section">
        <img 
          src="./noti_bell.png"
          alt="notifications"
          className="notification-icon"
        />
        {/* <button className="upload-button">Upload Material</button> */}
      </div>
    </div>
  );
};

const NavLink = ({ children }) => (
  <span className="nav-link">{children}</span>
);

export default Header;

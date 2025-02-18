import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigateProfile = useNavigate();
  const routeProfile = () => {
    let path = `/profile`;
    navigateProfile(path);
  };

  let navigateWishlist = useNavigate();
  const routeWishlist = () => {
    let path = '/wishlist';
    navigateWishlist(path);
  };

  let navigateHome = useNavigate();
  const routeHome = () => {
    let path = '/home';
    navigateHome(path);
  };

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
      <nav className="nav-links">
        <span className="nav-link" onClick={routeHome}>Home</span>
        <span className="nav-link" onClick={routeProfile}>Profile</span>
        <span className="nav-link" onClick={routeWishlist}>WishList</span>
      </nav>
      <div className="right-section">
        <img 
          src="./noti_bell.png"
          alt="notifications"
          className="notification-icon"
        />
      </div>
    </div>
  );
};

export default Header;

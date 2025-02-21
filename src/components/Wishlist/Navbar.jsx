import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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

    let navigateUpload = useNavigate();
        const routeUpload = () => {
        let path = '/upload';
          navigateUpload(path);
          console.log('Upload clicked');
      }
    
    
    

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
              
    <button 
        className="upload-button" 
        onClick={routeUpload}
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
      
    </div>
  );
};

export default Navbar;

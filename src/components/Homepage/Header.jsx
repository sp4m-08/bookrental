import React from 'react';
import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {

  let navigateProfile = useNavigate(); 
    const routeProfile = () =>{ 
    let path = `/profile`; 
    navigateProfile(path);
  }

  let navigateWishlist = useNavigate();
    const routeWishlist = () => {
    let path = '/wishlist';
      navigateWishlist(path);
  }
  let navigateUpload = useNavigate();
    const routeUpload = () => {
    let path = '/upload';
      navigateUpload(path);
      console.log('Upload clicked');
  }
  
  // const handleUpload = () => {
    
  // };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-circle">
          <span className="logo-text">Lo</span>
        </div>
        <span className="logo-title">LOGO</span>
      </div>

      <nav className="nav-links">
        <span className="nav-link">Home</span>
        <span className="nav-link" onClick={routeProfile}>Profile</span>
        <span className="nav-link" onClick={routeWishlist}>Wishlist</span>
      </nav>

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
    </header>
  );
};

export default Header;

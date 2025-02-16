import React from 'react';
import './Header.css';

const Header = () => {
  const handleUpload = () => {
    console.log('Upload clicked');
  };

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
        <span className="nav-link">Browse All Materials</span>
        <span className="nav-link">Profile</span>
      </nav>

      <button 
        className="upload-button" 
        onClick={handleUpload}
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

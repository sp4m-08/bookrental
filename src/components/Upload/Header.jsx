import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

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
        <span className="nav-link" onClick={()=>navigate('/home')}>Home</span>
        <span className="nav-link" onClick={()=>navigate('/profile')}>Profile</span>
        <span className="nav-link" onClick={()=>navigate('/wishlist')}>WishList</span>
      </nav>
      <div className="right-section">
        <img 
          src="./noti_bell.png"
          alt="notifications"
          className="notification-icon"
        />
        <div className='noti-container'></div>
      </div>
    </div>
  );
};

export default Header;

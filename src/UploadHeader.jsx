import React,{useState} from 'react';
import './UploadHeader.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

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
      </div>
    </div>
  );
};

export default Header;

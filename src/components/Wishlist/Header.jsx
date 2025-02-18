import React from 'react';

const Header = ({ style = {} }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      height: '75px',
      backgroundColor: '#557bb026',
      borderRadius: '14.38px',
      ...style
    }}>
      {/* Logo Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{
          position: 'relative',
          width: '47px',
          height: '47px'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#5956e9'
          }}></div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(90deg, rgba(73,172,170,1) 0.01%, rgba(63,193,192,1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              fontFamily: 'Gilroy, sans-serif',
              fontWeight: 700,
              fontSize: '45px',
              color: '#ffffff'
            }}>Lo</span>
          </div>
        </div>
        <span style={{
          fontFamily: 'Gilroy, sans-serif',
          fontWeight: 900,
          fontSize: '28px',
          letterSpacing: '2.8px',
          color: '#414141',
          textTransform: 'uppercase'
        }}>LOGO</span>
      </div>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        gap: '55px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '15px',
        color: '#000000'
      }}>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Profile</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>WishList</a>
      </div>

      {/* Right Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7SQbKWN819FoZm4/mdi-bell.png" 
          alt="notifications" 
          style={{
            width: '33px',
            height: '33px',
            cursor: 'pointer'
          }}
        />
        <button style={{
          width: '164px',
          height: '40px',
          backgroundColor: '#3a4694',
          border: '1px solid #3a4694',
          borderRadius: '4px',
          color: '#e4e9f1',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '17px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Upload Material
        </button>
      </div>
    </div>
  );
};

export default Header;


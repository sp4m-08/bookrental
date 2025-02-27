import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const LandingPage = () => {
  let navigate = useNavigate();

    
  
  const routeTo = (path) => {
      navigate(path);
    };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user);

      // Redirect to homepage after successful login
      navigate("/home");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Authentication failed. Please try again.");
    }
  };

  return (
    <div>
     <header className="header">
      <div className="logo-container">
        <div className="logo-circle">
          <span className="logo-text">Lo</span>
        </div>
        <span className="logo-title">LOGO</span>
      </div>

      <nav className="nav-links">
        <span className="nav-link" onClick={() => navigate('/')}>Home</span>
        <span className="nav-link" onClick={() => navigate('/home')}>Browse Books</span>
        <span className="nav-link" onClick={() => navigate('/home')}>Browse Notes</span>
        <span className="nav-link" onClick={() => navigate('/faq')}>FAQ</span>
        <span className="nav-link" onClick={() => navigate('/about-us')}>About Us</span>
      </nav>
          <button
          className="upload-button"
          onClick={handleGoogleLogin}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#1C0071';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1C0071';
          }}
        >
          Sign Up/Login
        </button>
                  
                
              
            
          
        
      </header>

      <section className="mid">
        <div className="mid-content">
          <h1>Book Rental / Find Notes</h1>
          <p>
            Lorem ipsum dolor sit amet, olore ma laboris n sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqu
          </p>
          <button className="btn" onClick={handleGoogleLogin}>Sign up/Login</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

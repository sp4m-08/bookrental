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
      <header>
        <div className="logo">
          <div className="img">
            <div className="img-overlay"></div>
            <span className="circle">LO</span>
            <span className="text">LOGO</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li onClick={() => navigate('/home')}>Home</li>
              <li onClick={() => navigate('/home')}>Browse Books</li>
              <li onClick={() => navigate('/home')}>Browse Notes</li>
              <li onClick={() =>routeTo('/faq')}> FAQ</li>
              <li onClick={() =>routeTo('/about-us')}>About us</li>
              <li>
                <div className="slb">
                  <div className="btop" onClick={handleGoogleLogin}>Sign up/Login</div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
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

import React, { useState } from "react";
import "./Signup.css";


const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  // Function to toggle between Sign In and Sign Up
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      {/* Forms Container */}
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form">
            <h2 className="title">Log in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            {/*<p className="social-text">Or Log in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>*/}
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
            {/*<p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>*/}
          </form>
        </div>
      </div>

      {/* Panels Container */}
      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Too late to get your book from the library? Worried about your open book tests? 
              Find students willing to lend you the book for an affordable price.
            </p>
            {<button className="btn transparent" onClick={toggleForm}>
              Sign up
            </button>}
          </div>
          {/*<img src="log.png" className="image" alt="log-in" />*/}
        </div>

        {/* Right Panel */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Not able to write huge notes? Don't worry! 
              Find handwritten notes at an affordable.
            </p>
            {<button className="btn transparent" onClick={toggleForm}>
              Log in
            </button>}
          </div>
          {/*<img src="register.png" className="image" alt="sign-up" />*/}
        </div>
      </div>
    </div>
  );
};

export default Signup;

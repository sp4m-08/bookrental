import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // Programmatic navigation

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    navigate(isSignUp ? "/login" : "/signup"); // Update URL
  };

  const isSignupPath = location.pathname === "/signup"; // Check if the current route is '/signup'

  return (
    <div className={`container ${isSignUp || isSignupPath ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {!isSignupPath && ( // Show Sign In Form only if not on '/signup'
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
            </form>
          )}

          {isSignupPath && ( // Show Sign Up Form only if on '/signup'
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
            </form>
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Too late to get your book from the library? Worried about your open book tests?
              Find students willing to lend you the book for an affordable price.
            </p>
            <button className="btn transparent" onClick={toggleForm}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Not able to write huge notes? Don't worry!
              Find handwritten notes at an affordable price.
            </p>
            <button className="btn transparent" onClick={toggleForm}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

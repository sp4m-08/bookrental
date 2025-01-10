import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import "./Signup.css";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // for navigation

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    navigate(isSignUp ? "/login" : "/signup"); // Update URL
  };

  //function to fetch login details to backend
  
  const [passwordLogin, setPasswordLogin] = useState('');
  const [messageLogin, setMessageLogin] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5001/login', { emailLogin, passwordLogin });
        setMessageLogin(response.data.message);
      } catch (err) {
        setMessageLogin(err.response?.data?.error || 'Something went wrong');
      }
      console.log(messageLogin);
    }
  
  //function to fetch signup data to backend
  
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const [confirmPasswordSignup, setConfirmPasswordSignup] = useState('');
    const [messageSignup, setMessageSignup] = useState('');
  
    // const handleSignup = async (e) => {
    //   e.preventDefault();
    //   try {
    //     console.log("entered")
    //     const response = await axios.post('http://localhost:5001/signup', {
    //       email: emailSignup,
    //       pass: passwordSignup,
    //       confirmpass: confirmPasswordSignup,
    //     });
    //     setMessageSignup(response.data.message);
    //   } catch (err) {
    //     setMessageSignup(err.response);
    //   }
    //   console.log(messageSignup);
    // }

    const handleSignup = async(e)=>{
      e.preventDefault();
      try{
        console.log("entered")
        const response = axios.post('http://localhost:5001/signup', {
          mail: emailSignup,
          pass: passwordSignup,
          confirmpass: confirmPasswordSignup,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }catch(err){
        console.log(err.response)
      }
    }
  

  const isSignupPath = location.pathname === "/signup"; // Check if the current route is '/signup'

  return (
    <div className={`container ${isSignUp || isSignupPath ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {!isSignupPath && ( // Show Sign In Form only if on '/login'
            <form className="sign-in-form" method="POST" onSubmit={handleLogin}>
              <h2 className="title">Log in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Enter your mail" value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)} required/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={passwordLogin} onChange={(e)=>setPasswordLogin(e.target.value)} required/>
              </div>

              <input type="submit" value="Login" className="btn solid" />
            </form>
            
          )}
          

          {isSignupPath && ( // Show Sign Up Form only if on '/signup'
            <form className="sign-up-form" onSubmit={handleSignup}>
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Enter your Email ID" value={emailSignup} onChange={(e)=>setEmailSignup(e.target.value)} required/>
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="password" placeholder="Enter your Password" value={passwordSignup} onChange={(e)=>setPasswordSignup(e.target.value)} required/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password" value={confirmPasswordSignup} onChange={(e)=>setConfirmPasswordSignup(e.target.value)} required/>
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

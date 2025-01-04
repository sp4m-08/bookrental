import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  let navigate = useNavigate(); 
  const routeLogin = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

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
              <li>Home</li>
              <li>Browse Books</li>
              <li>Browse Notes</li>
              <li>FAQ</li>
              <li>About us</li>
              <li>
                <div className="menu-icon-wrapper">
                  <div className="menu-circle" onClick={routeLogin}>Sign up/Login</div>
                </div>
            </li>
            </ul>
            
          </nav>
        </div>
      </header>

      <section className="mid">
        <div className="mid-content">
          <h1>
            Book Rental / <span>Find Notes</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, olore ma laboris n sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqu
          </p>
          <button className="btn" onClick={routeLogin}>Sign up/Login</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

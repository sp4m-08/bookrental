import React from 'react';
import Header from '../../Header';
import ListSection from '../Homepage/ListSection';
//import Footer from '../Homepage/Footer';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      
      <div className="header-section">
        {/* <Header /> */}
      </div>

      
      <div className="main-content">
        <ListSection />
      </div>

      
      {/* <div className="footer-section">
        <Footer />
      </div> */}
    </div>
  );
};

export default Homepage;
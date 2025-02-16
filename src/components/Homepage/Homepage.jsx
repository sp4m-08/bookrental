import React from 'react';
import Header from '../Homepage/Header';
import ListSection from '../Homepage/ListSection';
import Footer from '../Homepage/Footer';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <div className="header-section">
        <Header />
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <ListSection />
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

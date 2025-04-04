import React from 'react';
import './Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-container">
        <div className="section">
          <h3 className="heading">About Us</h3>
          <a href="#" className="link">Our Story</a>
          <a href="#" className="link">Team</a>
          <a href="#" className="link">Careers</a>
        </div>

        <div className="section">
          <h3 className="heading">Support</h3>
          <a href="#" className="link">Help Center</a>
          <a href="#" className="link">Contact Us</a>
          <a href="#" className="link">FAQs</a>
        </div>

        <div className="section">
          <h3 className="heading">Legal</h3>
          <a href="#" className="link">Privacy Policy</a>
          <a href="#" className="link">Terms of Service</a>
          <a href="#" className="link">Cookie Policy</a>
        </div>

        <div className="section">
          <h3 className="heading">Connect</h3>
          <a href="#" className="link">Facebook</a>
          <a href="#" className="link">Twitter</a>
          <a href="#" className="link">LinkedIn</a>
        </div>
      </div>

      <div className="bottom-bar">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

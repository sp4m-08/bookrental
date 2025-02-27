import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <main className="container">
      <div className="content-box">
        {/* Back Button */}
        <div className="back-btn">
          <svg className="arrow" width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="./arrow.png">
            <path d="M25.604 19.2031L19.203 25.6041M19.203 25.6041L25.604 32.0051M19.203 25.6041L36.2724 25.6041" stroke="#1C0070" strokeWidth="2.13367" />
          </svg>
          <span>Back</span>
        </div>
        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            <div className="zoom-controls">
              <div className="sidebar">
                <svg className="sidescroll" width="79" height="300" viewBox="0 0 72 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="135" width="32" height="32" fill="#EEF1FC" stroke="#1C0071" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="preview-box" />
          </div>
          {/* Right Column */}
          <div className="right-column">
            <div className="tags">
              <span>TextBook</span>
              <span>Prob & Stats</span>
            </div>
            <h1>Lorem ipsum dolor sit</h1>
            <h2>Author Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="author">
              <div className="author-pic" />
              <span>John Doe</span>
            </div>
            <div className="valid-date">Valid Until: 16/02/2025</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;

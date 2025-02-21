import React, { useState } from 'react';
import './ListSection.css';

const ListSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filters, setFilters] = useState({
    notes: false,
    textbooks: false,
  });

  const materials = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png', 
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['TextBook', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-2.png',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['TextBook', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-2.png',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['TextBook', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-2.png',
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
    {
      id: 8,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['TextBook', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-2.png',
    },
    {
      id: 9,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
    {
      id: 10,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
    {
      id: 11,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['TextBook', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-2.png',
    },
    {
      id: 12,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
    {
      id: 13,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
    {
      id: 14,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['TextBook', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-2.png',
    },
    {
      id: 15,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png',
    },
  ];

  return (
    <div className="list-section">
      <div className="main-container">
        {/* Left container for search and filters */}
        <div className="search-filter-container">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search anything...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/group-4.png"
              alt="search"
              className="search-icon"
            />
          </div>

          {/* Checkboxes */}
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.notes}
                onChange={() => setFilters((prev) => ({ ...prev, notes: !prev.notes }))}
              />
              <span className="checkbox-text">Notes</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.textbooks}
                onChange={() => setFilters((prev) => ({ ...prev, textbooks: !prev.textbooks }))}
              />
              <span className="checkbox-text">TextBooks</span>
            </label>
          </div>

          {/* Subject Dropdowns */}
          <div className="dropdown-container">
            {[1, 2, 3].map((_, index) => (
              <select key={index} className="subject-dropdown">
                <option value="">Subjects</option>
              </select>
            ))}
          </div>

          {/* Date Filters */}
          <div className="date-filter-container">
            <span className="availability-text">Available Till:</span>
            <div>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="date-input"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              onClick={() => {
                setSearchQuery('');
                setFromDate('');
                setToDate('');
                setFilters({ notes: false, textbooks: false });
              }}
              className="clear-button"
            >
              Clear
            </button>
            <button className="apply-button">Apply</button>
          </div>
        </div>

        {/* Right container for available materials */}
        <div className="materials-container">
          <h1 className="materials-title">Available Material</h1>
          <div className="materials-section">
            {materials.map((material) => (
              <div key={material.id} className="material-card">
                <img src={material.image} alt="material" className="material-image" />
                <div className="material-info">
                  <h3 className="material-title">{material.title}</h3>
                  <div className="author-info">
                    <img
                      src="https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/vector.png"
                      alt="user"
                      className="author-icon"
                    />
                    <span className="author-name">{material.author}</span>
                  </div>
                  <div className="tags-container">
                    {material.type.map((tag, index) => (
                      <span key={index} className="material-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="date-info">
                  <div>
                    <pre>
                    <p className="date-label">Valid Until: {material.validUntil}</p> </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
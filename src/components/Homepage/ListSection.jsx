import React, { useState } from 'react';
import './ListSection.css';

const ListSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filters, setFilters] = useState({
    notes: false,
    textbooks: false
  });

  const materials = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-3.png'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['TextBook', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49-2.png'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit',
      author: 'John Doe',
      type: ['Notes', 'Prob&Stats'],
      datePosted: '18/01/2025',
      validUntil: '18/01/2025',
      image: 'https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/frame-49.png'
    }
  ];

  return (
    <div className="list-section">
      <h1 className="section-title">Available Material</h1>

      <div className="filter-material-container">
        {/* Left Filter Section */}
        <div className="filter-section">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search anything...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <img src="https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/group-4.png" alt="search" className="search-icon" />
          </div>

          {/* Checkboxes */}
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.notes}
                onChange={() => setFilters(prev => ({ ...prev, notes: !prev.notes }))}
              />
              <span className="checkbox-text">Notes</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.textbooks}
                onChange={() => setFilters(prev => ({ ...prev, textbooks: !prev.textbooks }))}
              />
              <span className="checkbox-text">TextBooks</span>
            </label>
          </div>

          {/* Subject Dropdowns */}
          <div className="dropdown-container">
            {[1, 2, 3].map((_, index) => (
              <select
                key={index}
                className="subject-dropdown"
              >
                <option value="">Subjects</option>
              </select>
            ))}
          </div>

          {/* Date Filters */}
          <div className="date-filter-container">
            <span className="availability-text">Availability :</span>
            <div>
              <label className="date-label">From :</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="date-input"
              />
            </div>
            <div>
              <label className="date-label">To :</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
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
            <button className="apply-button">
              Apply
            </button>
          </div>
        </div>

        {/* Right Materials Section */}
        <div className="materials-section">
          {materials.map((material) => (
            <div
              key={material.id}
              className="material-card"
            >
              <img src={material.image} alt="material" className="material-image" />
              <div className="material-info">
                <h3 className="material-title">{material.title}</h3>
                <div className="author-info">
                  <img src="https://dashboard.codeparrot.ai/api/image/Z6oU7vrycnbNR_mI/vector.png" alt="user" className="author-icon" />
                  <span className="author-name">{material.author}</span>
                </div>
                <div className="tags-container">
                  {material.type.map((tag, index) => (
                    <span
                      key={index}
                      className="material-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="divider" />
              <div className="date-info">
                <div>
                  <p className="date-label">Date Posted:</p>
                  <p className="date-value">{material.datePosted}</p>
                </div>
                <div>
                  <p className="date-label">Valid Until:</p>
                  <p className="date-value">{material.validUntil}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListSection;

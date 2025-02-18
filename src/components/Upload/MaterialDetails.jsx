import React, { useState } from 'react';
import './MaterialDetails.css';

const MaterialDetails = () => {
  const [materialName, setMaterialName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');
  const [materialType, setMaterialType] = useState('notes'); // 'notes' or 'textbooks'

  return (
    <div className="material-details">
      <div className="details-container">
        <div className="input-group">
          <label className="input-label">Enter The Material Name:</label>
          <input
            type="text"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Choose Type of Material:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                checked={materialType === 'notes'}
                onChange={() => setMaterialType('notes')}
                className="radio-input"
              />
              <span className="radio-text">Notes</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                checked={materialType === 'textbooks'}
                onChange={() => setMaterialType('textbooks')}
                className="radio-input"
              />
              <span className="radio-text">TextBooks</span>
            </label>
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Enter the Author Name:</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Enter Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Available until:</label>
          <div className="date-input-container">
            <input
              type="date"
              value={availableUntil}
              onChange={(e) => setAvailableUntil(e.target.value)}
              className="date-input"
              placeholder="dd/mm/yy"
            />
            <img src="https://dashboard.codeparrot.ai/api/image/Z7M2DzO_YEiK21wK/bx-bx-ca.png" alt="calendar icon" className="calendar-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetails;

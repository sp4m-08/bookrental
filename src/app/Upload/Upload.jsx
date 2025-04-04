import React, { useState } from 'react';
import './Upload.css';

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [materialName, setMaterialName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');
  const [materialType, setMaterialType] = useState('notes'); // Default: 'notes'

  
  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  
  const handleFiles = (newFiles) => {
    const validFiles = newFiles
      .filter((file) => {
        const isValidType = ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
        const isValidSize = file.size <= 25 * 1024 * 1024; // Max 25MB
        return isValidType && isValidSize;
      })
      .map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
      }));

    setFiles([...files, ...validFiles]);
  };


  const handleRemoveFile = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  
  const handleDone = () => {
    if (files.length >= 3) {
      alert('Successfully uploaded!');
      setFiles([]); 
    } else {
      alert('Please upload at least 3 files before proceeding.');
    }
  };

  return (
    <div className="layout">
      <div className="content">

        {/* Upload Projects Section */}
        <div className="upload-projects">
          <div className="modal">
            <h2 className="title">Upload Projects</h2>
            <p className="subtitle">
              Please upload at least 3 files in JPEG, PNG, or PDF format and ensure the file size is under 25 MB.
            </p>

            <div className="uploader">
              {files.length > 0 ? (
                <div className="file-list">
                  {files.map((file) => (
                    <div key={file.id} className="file-item">
                      <div className="file-info">
                        <img src="./file.png" alt="File icon" className="file-icon" />
                        <span className="file-name">{file.name}</span>
                      </div>
                      <button className="remove-button" onClick={() => handleRemoveFile(file.id)}>
                        <img src="/delete.png" alt="Remove" className="remove-icon" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <img src="/clipboard.png" alt="Upload icon" className="upload-icon" />
                  <p className="upload-text">Drop file or Browse</p>
                  <p className="upload-subtext">Format: JPEG, PNG, PDF | Max size: 25 MB</p>
                </>
              )}
              <label htmlFor="file-upload" className="browse-button">
                <img src="/browseicon.png" alt="Browse" className="browse-icon" />
                Browse
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                multiple
                onChange={handleFileInput}
                style={{ display: 'none' }}
              />
            </div>

            <div className="action-buttons">
              <button className="cancel-button">Cancel</button>
              <button className="done-button" onClick={handleDone}>Done</button>
            </div>
          </div>
        </div>

        {/* Material Details Section */}
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
                <img src="/calender.png" alt="Calendar icon" className="calendar-icon" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Upload;

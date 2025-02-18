import React, { useState } from 'react';
import './UploadProjects.css';


const UploadProjects = () => {
  const [files, setFiles] = useState([]);

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles) => {
    const validFiles = newFiles.filter(file => {
      const isValidType = ['image/jpeg', 'image/png'].includes(file.type);
      const isValidSize = file.size <= 25 * 1024 * 1024; // 25MB
      return isValidType && isValidSize;
    });
    setFiles([...files, ...validFiles]);
  };

  return (
    <div className="upload-projects">
      <div className="modal">
        <div>
          <h2 className="title">Upload Projects</h2>
          <p className="subtitle">
            Please upload at least 3 pictures in JPEG or PNG format and make sure the file size is under 25 MB.
          </p>
        </div>

        <div className="uploader">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7M2DzO_YEiK21wK/clipboar.png" 
            alt="Upload icon"
            className="upload-icon"
          />
          <p className="upload-text">Drop file or Browse</p>
          <p className="upload-subtext">Format: jpeg, png & Max file size: 25 MB</p>
          <label htmlFor="file-upload" className="browse-button">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7M2DzO_YEiK21wK/icons.png" 
              alt="Browse"
              className="browse-icon"
            />
            Browse
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".jpg,.jpeg,.png"
            multiple
            onChange={handleFileInput}
            style={{ display: 'none' }}
          />
        </div>

        <div className="action-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="done-button">Done</button>
        </div>
      </div>
    </div>
  );
};

export default UploadProjects;

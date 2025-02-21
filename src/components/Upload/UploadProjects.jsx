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
      const isValidType = ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
      const isValidSize = file.size <= 25 * 1024 * 1024; // 25MB
      return isValidType && isValidSize;
    }).map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      name: file.name
    }));
    setFiles([...files, ...validFiles]);
  };

  const handleRemoveFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleDone = () => {
    if (files.length > 0) {
      alert('Successfully uploaded!');
      setFiles([]); // Reset the files state to an empty array
    } else {
      alert('Please upload at least 3 files before proceeding.'); // Optional: Alert if no files are uploaded
    }
  };

  return (
    <div className="upload-projects">
      <div className="modal">
        <div>
          <h2 className="title">Upload Projects</h2>
          <p className="subtitle">
            Please upload at least 3 files in JPEG, PNG or PDF format and make sure the file size is under 25 MB.
          </p>
        </div>

        <div className="uploader">
          {files.length > 0 ? (
            <div className="file-list">
              {files.map(file => (
                <div key={file.id} className="file-item">
                  <div className="file-info">
                    <img 
                      src="./file.png" 
                      alt="File icon"
                      className="file-icon"
                    />
                    <span className="file-name">{file.name}</span>
                  </div>
                  <button 
                    className="remove-button"
                    onClick={() => handleRemoveFile(file.id)}
                  >
                    <img 
                      src="/delete.png" 
                      alt="Remove"
                      className="remove-icon"
                    />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <>
              <img 
                src="/clipboard.png" 
                alt="Upload icon"
                className="upload-icon"
              />
              <p className="upload-text">Drop file or Browse</p>
              <p className="upload-subtext">Format: jpeg, png, pdf & Max file size: 25 MB</p>
            </>
          )}
          <label htmlFor="file-upload" className="browse-button">
            <img 
              src="/browseicon.png" 
              alt="Browse"
              className="browse-icon"
            />
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
  );
};

export default UploadProjects;
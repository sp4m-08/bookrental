import React from 'react';
import Header from '../../UploadHeader';
import UploadProjects from './UploadProjects';
import MaterialDetails from './MaterialDetails';
import './Upload.css';

const Upload = () => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <div className="content">
        <UploadProjects />
        <MaterialDetails />
      </div>
    </div>
  );
};

export default Upload;

import React from 'react';
import './TableHeader.css';

const TableHeader = ({ headers }) => {
  return (
    <div className="table-header">
      {headers.map((header, index) => (
        <div key={index} className="header-cell">
          <span>{header}</span>
        </div>
      ))}
    </div>
  );
};

export default TableHeader;


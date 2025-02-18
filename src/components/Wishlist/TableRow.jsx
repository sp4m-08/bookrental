import React from 'react';
import './TableRow.css';

const TableRow = ({ row }) => {
  return (
    <div className="table-row">
      <div className="table-cell lender">
        <div className="lender-info">
          <div className="avatar"></div>
          <span>{row.lender}</span>
        </div>
      </div>
      <div className="table-cell status">
        <div className={`status-badge ${row.status.toLowerCase()}`}>
          <div className="status-dot"></div>
          <span>{row.status}</span>
        </div>
      </div>
      <div className="table-cell title">
        <span>{row.title}</span>
      </div>
      <div className="table-cell valid-till">
        <span>{row.validTill}</span>
      </div>
      <div className="table-cell availability">
        <span>{row.availability}</span>
      </div>
      <div className="table-cell actions">
        <button className="delete-btn">
          <img src="https://dashboard.codeparrot.ai/api/image/Z7SQbKWN819FoZm4/trash-01.png" alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default TableRow;


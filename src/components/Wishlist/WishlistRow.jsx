import React from 'react';

import './WishlistRow.css';

const WishlistRow = ({ item }) => {
  return (
    <div className="wishlist-row">
      <div className="row-cell">
        <div className="lender">
          <div className="avatar"></div>
          <span>{item.lender}</span>
        </div>
      </div>
      <div className="row-cell">
        <span className={`status-badge ${item.status.toLowerCase()}`}>
          {item.status}
        </span>
      </div>
      <div className="row-cell font-medium">{item.title}</div>
      <div className="row-cell">{item.validTill}</div>
      <div className="row-cell">{item.availability}</div>
      <div className="row-cell">
        <button className="delete-btn">
          <img src="./delete.png" alt="delete"/>
        </button>
      </div>
    </div>
  );
};

export default WishlistRow;
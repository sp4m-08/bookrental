import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  const wishlistData = [
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },

    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },
    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    },

    {
      id: 1,
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column',
    }
  ];

  const WishlistRow = ({ item }) => (
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
          <img src="./delete.png" alt="delete" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <h1 className="wishlist-title">Wishlist</h1>
        <div className="wishlist-table">
          <div className="table-header">
            <div className="header-cell">Lender</div>
            <div className="header-cell">Status</div>
            <div className="header-cell">Title</div>
            <div className="header-cell">Valid Till</div>
            <div className="header-cell">Availability</div>
            <div className="header-cell"></div>
          </div>
          <div className="scrollable-container">
            <div className="table-body">
              {wishlistData.map((item, index) => (
                <WishlistRow key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

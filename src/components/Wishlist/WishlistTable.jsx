import React from 'react';
import WishlistRow from './WishlistRow';
import './WishlistTable.css';

const WishlistTable = () => {
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
    
    // Add more items as needed
  ];

  return (
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
          {wishlistData.map((item) => (
            <WishlistRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistTable;
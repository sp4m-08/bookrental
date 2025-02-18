import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import './WishList.css';

const WishList = () => {
  const headers = ['Lender', 'Status', 'Title', 'Valid Till', 'Availability', ''];
  const rows = [
    {
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Requested',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Accepted',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Accepted',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Accepted',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Accepted',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Accepted',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Accepted',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    },
    {
      lender: 'John Doe',
      status: 'Accepted',
      title: 'Bold text column',
      validTill: 'Regular text column',
      availability: 'Regular text column'
    }
  ];

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">WishList</h1>
      <div className="table-container">
        <TableHeader headers={headers} />
        <div className="table-body">
          {rows.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;


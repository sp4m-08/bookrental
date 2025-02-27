import React from 'react';
import WishlistTable from './WishlistTable';
import './Wishlist.css';

const Wishlist = () => {
  return (
    <div className="wishlist-page">
      
      <div className="wishlist-container">
        <h1 className="wishlist-title">WishList</h1>
        <WishlistTable />
      </div>
    </div>
  );
};

export default Wishlist;
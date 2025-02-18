import React from 'react';
import Header from './Header';
import WishList from './WishList';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z7SQbKWN819FoZm4/hori-lin.png), url(https://dashboard.codeparrot.ai/api/image/Z7SQbKWN819FoZm4/verti-li.png)',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover'
    }}>
      <Header style={{
        flexGrow: 0,
        height: '75px',
        width: '100%',
        backgroundColor: '#557bb026',
        borderRadius: '14.38px'
      }} />
      <WishList style={{
        flexGrow: 1,
        width: '100%',
        height: 'auto',
        backgroundColor: '#557bb026',
        borderRadius: '14.38px',
        marginTop: '20px'
      }} />
    </div>
  );
};

export default Layout;


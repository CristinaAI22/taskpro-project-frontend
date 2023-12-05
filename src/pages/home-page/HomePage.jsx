import React from 'react';
import Navbar from '../../components/header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ScreensPage from '../../components/screens-page/ScreensPage';

export const Home = () => {
  return (
    // <div className="container-fluid">
    <div className='row'>
      <div className='col-md-3'>
        <Sidebar />
      </div>
      <div className='col-md-9'>
        <Navbar />
        {/* <div
          style={{
            flex: '1 1 auto',
            display: 'flex',
            flexFlow: 'column',
            overflowY: 'hidden',
          }}
        > */}
        <ScreensPage />
      </div>
      {/* </div> */}
    </div>
    // </div>
  );
};

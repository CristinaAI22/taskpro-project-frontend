import React, { useEffect } from 'react';
import Navbar from '../../components/header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ScreensPage from '../../components/screens-page/ScreensPage';
import { useDispatch } from 'react-redux';
import { getAllBoards } from '../../features/board-slice/operations';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    // <div className="container-fluid">
    <div className='aplication-container'>
      {/* //row */}
      <div className='aplication-sidebar-container'>
        {/* //col-md-3 */}
        <Sidebar />
      </div>
      <div className='aplication-main-container'>
        {/* col-md-9 m-0 p-0 */}
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

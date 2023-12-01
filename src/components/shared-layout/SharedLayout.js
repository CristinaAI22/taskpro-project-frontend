import './SharedLayout.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../loading/Loading';
import Navbar from '../header/Header';

const SharedLayout = () => {
  return (
    <div className='container'>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;

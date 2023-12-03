import './SharedLayout.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../loading/Loading';
// import Navbar from '../header/Header';
// import { Dashboard } from "../Dashboard/Dashboard";

const SharedLayout = () => {
  return (
    <div className='container'>
      {/* <Navbar /> */}
      {/* <Dashboard/> */}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;

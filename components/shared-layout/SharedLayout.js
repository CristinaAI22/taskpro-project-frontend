import './SharedLayout.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../loading/Loading';
// import Navbar from '../header/Header';
//import { Home } from "../../pages/home-page/HomePage";

const SharedLayout = () => {
  return (
    <div className='containers'>
      {/* <Navbar /> */}
      {/* <Home/> */}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;

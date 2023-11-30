import './SharedLayout.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../loading/Loading';

const SharedLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};
export default SharedLayout;

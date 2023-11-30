import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import SharedLayout from './components/shared-layout/SharedLayout';
import Loading from './components/loading/Loading';
import { selectIsRefreshing } from './redux/auth/selectorsAuth';
import { refreshUser } from './redux/auth/operationsAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//  temporary just for develop
import ScreensPage from './components/screens-page/ScreensPage';

const LogIn = lazy(() => import('./pages/login-page/LogIn'));
const Register = lazy(() => import('./pages/register-page/Register'));
const UsersPage = lazy(() => import('./pages/user-page/User'));
const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
    // document.body.setAttribute('data-bs-theme', 'dark');
    // return () => {
    //   document.body.removeAttribute('data-bs-theme');
    // };
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loading />
      ) : (
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route
              index
              path='/register'
              element={
                <RestrictedRoute redirectTo='/users' component={<Register />} />
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute redirectTo='/users' component={<LogIn />} />
              }
            />
            <Route
              path='/users'
              element={
                <PrivateRoute
                  redirectTo='/register'
                  component={<UsersPage />}
                />
              }
            />
          </Route>
          {/* temporary just for develop  */}
          <Route path='/users/screens-page' element={<ScreensPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      )}
      <ToastContainer
        font-size='15px'
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

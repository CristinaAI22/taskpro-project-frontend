import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { refreshUser } from './features/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import SharedLayout from './components/shared-layout/SharedLayout';
import Loading from './components/loading/Loading';

import HomePage from './pages/home-page/HomePage.js';
import Header from './components/header/Header.js';

const Register = lazy(() => import('./pages/register-page/Register'));
const ScreensPage = lazy(() =>
  import('./components/screens-page/ScreensPage.js')
);

const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));

export const App = () => {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className='loading-container'>
      <Loading />
    </div>
  ) : (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Register />} />
        <Route path='screens-page' element={<ScreensPage />} />
        <Route path='home-page' element={<HomePage />} />
        <Route path='header' element={<Header />} />

        {/* <Route
          path='/users/register'
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<Register />}
            />
          }
        />

        <Route
          path='/users/login'
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<Login />}
            />
          }
        />
        <Route
          path='/users/home-page'
          element={
            <PrivateRoute
              redirectTo='/users/register'
              component={<UsersHomePage />}
            />
          }
        />
        <Route
          path='/users/diary'
          element={
            <PrivateRoute redirectTo='/users/register' component={<Diary />} />
          }
        /> */}
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

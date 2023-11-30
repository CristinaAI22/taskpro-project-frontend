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
import ScreensPage from './components/screens-page/ScreensPage';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const LogInPage = lazy(() => import('./pages/login-page/LogIn'));
const RegisterPage = lazy(() => import('./pages/register-page/Register'));
const UserPage = lazy(() => import('./pages/user-page/User'));
const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));
const Header = lazy(() => import('./components/header/Header'));

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
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<HomePage />}
            />
          }
        />

        <Route
          path='/register'
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path='/login'
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<LogInPage />}
            />
          }
        />
        <Route
          path='/users/home-page'
          element={
            <PrivateRoute
              redirectTo='/users/register'
              component={<UserPage />}
            />
          }
        />
        <Route path='/users/header' element={<Header />} />
        <Route path='/users/screens-page' element={<ScreensPage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

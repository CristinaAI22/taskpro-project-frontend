import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { refreshUser } from './features/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { selectUser } from './features/auth/selectors.js';
import { useSelector } from 'react-redux';
import SharedLayout from './components/shared-layout/SharedLayout';
import Loading from './components/loading/Loading';
import LoginForm from './components/login/LoginForm.js';
import RegisterForm from './components/register/RegisterForm.js';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from './components/header/ThemeContext.js';
import getTheme from './components/header/getTheme.js';

import { Home } from './pages/home-page/HomePage.jsx';
// import Header from './components/header/Header.js';

// const ScreensPage = lazy(() =>
//   import('./components/screens-page/ScreensPage.js')
// );

const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));
const WelcomePage = lazy(() => import('./pages/welcome/Welcome.js'));
const AuthPage = lazy(() => import('./pages/Auth/Auth.js'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const user = useSelector(selectUser);
  const theme = createTheme(getTheme(user.theme));

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  console.log('Current Theme:', theme);

  return isRefreshing ? (
    <div className='loading-container'>
      <Loading />
    </div>
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo='/home' component={<WelcomePage />} />
            }
          />
          <Route
            path='/home'
            element={<PrivateRoute redirectTo='/' component={<Home />} />}
          ></Route>
          {/* <Route path='screens-page' element={<ScreensPage />} /> */}
          {/* <Route path='header' element={<Header />} /> */}
          {/* <Route path='/home' element={<WelcomePage />} /> */}
          <Route
            path='auth/:id'
            element={
              <RestrictedRoute redirectTo='/home' component={<AuthPage />} />
            }
          ></Route>
          <Route path='register' element={<RegisterForm />} />
          <Route path='login' element={<LoginForm />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
};

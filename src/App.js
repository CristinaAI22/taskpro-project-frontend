import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import SharedLayout from "./components/shared-layout/SharedLayout";
import Loading from "./components/loading/Loading";
import LoginForm from "./components/login/LogInForm.js";
import RegisterForm from "./components/register/RegisterForm.js";

import { Home } from "./pages/home-page/HomePage.jsx";
// import Header from './components/header/Header.js';

// const ScreensPage = lazy(() =>
//   import('./components/screens-page/ScreensPage.js')
// );

const ErrorPage = lazy(() => import("./pages/error-page/ErrorPage"));
const WelcomePage = lazy(() => import("./pages/welcome/Welcome.js"));
const AuthPage = lazy(() => import("./pages/Auth/Auth.js"));

export const App = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <div className="loading-container">
      <Loading />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
          }
        />
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={<Home />} />}
        ></Route>
        {/* <Route path="screens-page" element={<ScreensPage />} />
            <Route path="header" element={<Header />} /> */}
        <Route path="/home" element={<WelcomePage />} />
        <Route
          path="auth/:id"
          element={
            <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
          }
        ></Route>
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

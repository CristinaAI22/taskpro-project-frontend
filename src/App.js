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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../src/features/auth/operations.js";
import getTheme from "./components/header/getTheme.js";
import { ThemeProvider } from "../src/components/header/ThemeContext.js";

const WelcomePage = lazy(() => import("./pages/welcome/Welcome.js"));
const AuthPage = lazy(() => import("./pages/Auth/Auth.js"));
const ErrorPage = lazy(() => import("./pages/error-page/ErrorPage"));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.auth.user.theme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const theme = getTheme(userTheme);
  console.log("this is theme in app:", { theme });

  return (
    <ThemeProvider {...theme}>
      <div
        className="app-container"
        style={{ background: theme.palette.background.default }}
      >
        {isRefreshing ? (
          <div className="loading-container">
            <Loading />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <RestrictedRoute
                    redirectTo="/home"
                    component={<WelcomePage />}
                  />
                }
              />
              <Route
                path="/home"
                element={<PrivateRoute redirectTo="/" component={<Home />} />}
              />
              <Route
                path="auth/:id"
                element={
                  <RestrictedRoute
                    redirectTo="/home"
                    component={<AuthPage />}
                  />
                }
              />
              <Route path="register" element={<RegisterForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
};

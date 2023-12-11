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
import { useSelector } from "react-redux";

const WelcomePage = lazy(() => import("./pages/welcome/Welcome.js"));
const AuthPage = lazy(() => import("./pages/Auth/Auth.js"));
const ErrorPage = lazy(() => import("./pages/error-page/ErrorPage"));

export const App = () => {
  const { isRefreshing } = useAuth();

  const themeProps = useSelector((state) => state.auth.themeProps);

  const style = {
    " modalsBtnsBg": themeProps.palette.primary.dark,
    " colorBlack": themeProps.palette.primary.dark,
    " bgColorForm": themeProps.palette.primary.dark,
    " bgColorLight": themeProps.palette.primary.dark,
    bgColorPale: themeProps.palette.primary.dark,
    " borderColor": themeProps.palette.primary.dark,
    " colorBlue": themeProps.palette.primary.dark,
    " colorCream": themeProps.palette.primary.dark,
    "  colorDark": themeProps.palette.primary.dark,
    " colorDarkGray": themeProps.palette.primary.dark,
    " colorDeepBlack": themeProps.palette.primary.dark,
    "  colorHoverGreen": themeProps.palette.primary.dark,
    "  colorIconDark": themeProps.palette.primary.dark,
    " colorLight": themeProps.palette.primary.dark,
    " colorLightBlue": themeProps.palette.primary.dark,
    "  colorLightGray": themeProps.palette.primary.dark,
    colorLightPurple: themeProps.palette.primary.dark,
    colorOpacityBlack: themeProps.palette.primary.dark,
    " colorPaleBlue": themeProps.palette.primary.dark,
    colorPaleGray: themeProps.palette.primary.dark,
    colorPaleWhite: themeProps.palette.primary.dark,
    " colorPastel": themeProps.palette.primary.dark,
    colorPink: themeProps.palette.primary.dark,
    " colorPurple": themeProps.palette.primary.dark,
    "  colorPurple": themeProps.palette.primary.dark,
    colorRed: themeProps.palette.primary.dark,
    " colorShadow": themeProps.palette.primary.dark,
    " colorTextCard": themeProps.palette.primary.dark,
    " colorTextDark": themeProps.palette.primary.dark,
    colorTextGrey: themeProps.palette.primary.dark,
    colorTransparentBlack: themeProps.palette.primary.dark,
    /*-----------------------------------*/
    colorTextDarkMain: themeProps.palette.primary.dark,
    "  colorTextWhiteMain": themeProps.palette.primary.dark,
    " colorTextVioletMain": themeProps.palette.primary.dark,

    // " --color-text-dark-07": themeProps.palette.primary.dark,
    // /*card description*/
    // " --color-text-dark-05": themeProps.palette.primary.dark,
    // /*priority deadline*/
    // " --color-text-white-05": themeProps.palette.primary.dark,
    // /*card description*/
    // " --color-cream": themeProps.palette.primary.dark,
  };

  return (
    <div className="app-container" style={style}>
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
            ></Route>
            <Route
              path="/home/:boardId"
              element={<PrivateRoute redirectTo="/" component={<Home />} />}
            ></Route>
            {/* <Route path='screens-page' element={<ScreensPage />} /> */}
            {/* <Route path='header' element={<Header />} /> */}
            {/* <Route path='/home' element={<WelcomePage />} /> */}
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
      )}
    </div>
  );
};

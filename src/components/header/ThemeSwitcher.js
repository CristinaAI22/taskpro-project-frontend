import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserTheme } from "../../features/auth/operations";
import { selectIsLoggedIn } from "../../features/auth/selectors";
import { updateUserThemeSuccess } from "../../features/auth/authSlice";
import getTheme from "./getTheme";
import { ThemeProvider, useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const [updatedTheme, setUpdatedTheme] = useState(null);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const themeOptions = ["light", "dark", "violet"];

  const handleLocalThemeChange = async (selectedTheme) => {
    try {
      if (isLoggedIn) {
        const response = await dispatch(
          updateUserTheme({ theme: selectedTheme })
        );

        if (response.payload && response.payload.user) {
          const themeFromResponse = response.payload.user.theme;
          console.log("Updated Theme:", themeFromResponse);
          setUpdatedTheme(themeFromResponse);
          dispatch(updateUserThemeSuccess(response.payload));
        } else {
          console.error("Invalid response structure:", response);
        }
      }
    } catch (error) {
      console.error("Error updating user theme:", error.message);
    }
  };
  return (
    <ThemeProvider
      theme={getTheme(updatedTheme !== null ? updatedTheme : theme)}
    >
      <div data-bs-theme="dark">
        <button
          className="btn btn-secondary header border-0"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Theme({updatedTheme}) <i className="bi bi-chevron-down"></i>
        </button>

        <div
          className="dropdown-menu dropdown-menu-right flex-column"
          aria-labelledby="dropdownMenuButton"
        >
          {themeOptions.map((themeOption) => (
            <button
              className="dropdown-item"
              key={themeOption}
              onClick={() => handleLocalThemeChange(themeOption)}
            >
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;

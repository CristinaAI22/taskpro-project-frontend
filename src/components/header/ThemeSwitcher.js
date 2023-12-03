import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserTheme } from "../../features/auth/operations";
import getTheme from "./getTheme";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.auth.user.theme);

  const handleThemeChange = (selectedTheme) => {
    const theme = getTheme(selectedTheme);
    dispatch(updateUserTheme({ theme: selectedTheme }));
    // Apply the theme to the entire application (optional)
    applyTheme(theme);
  };

  const applyTheme = (theme) => {
    // Implement logic to apply the theme to your application
    // You might need to update the styles or use a library like Material-UI for theming
    console.log("Applying theme:", theme);
  };

  const themeOptions = ["light", "dark", "violet"];

  return (
    <div className="dropdown" data-bs-theme="dark">
      <button
        className="btn btn-secondary"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Theme <i className="bi bi-chevron-down"></i>
      </button>

      <div
        className="dropdown-menu dropdown-menu-right flex-column"
        aria-labelledby="dropdownMenuButton"
      >
        {themeOptions.map((themeOption) => (
          <button
            className="dropdown-item"
            key={themeOption}
            onClick={() => handleThemeChange(themeOption)}
          >
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;

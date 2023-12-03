import React from "react";
import { useDispatch } from "react-redux";
import { updateUserTheme } from "../../features/auth/operations";
import getTheme from "./getTheme";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (selectedTheme) => {
    const theme = getTheme(selectedTheme);
    dispatch(updateUserTheme({ theme: selectedTheme }));
    //ar trebui aplicat la toata aplicatia dar nu stiu cum...
    applyTheme(theme);
  };

  const applyTheme = (theme) => {
    //de implementat logica
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

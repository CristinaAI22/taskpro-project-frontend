// import React, { createContext, useContext, useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateUserTheme } from "../../features/auth/operations";
// import getTheme from "./getTheme";

// const ThemeSwitcher = () => {
//   const dispatch = useDispatch();

//   const handleThemeChange = (selectedTheme) => {
//     const newTheme = createTheme(getTheme(selectedTheme));
//     dispatch(updateUserTheme({ theme: selectedTheme }));
//     // Apply the new theme to the entire app
//     setTheme(newTheme);
//   };

//   const themeOptions = ["light", "dark", "violet"];

//   return (
//     <div className="dropdown" data-bs-theme="dark">
//       <button
//         className="btn btn-secondary"
//         type="button"
//         id="dropdownMenuButton"
//         data-bs-toggle="dropdown"
//         aria-haspopup="true"
//         aria-expanded="false"
//       >
//         Theme <i className="bi bi-chevron-down"></i>
//       </button>

//       <div
//         className="dropdown-menu dropdown-menu-right flex-column"
//         aria-labelledby="dropdownMenuButton"
//       >
//         {themeOptions.map((themeOption) => (
//           <button
//             className="dropdown-item"
//             key={themeOption}
//             onClick={() => handleThemeChange(themeOption)}
//           >
//             {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThemeSwitcher;

import React from "react";
import { useDispatch } from "react-redux";
import { updateUserTheme } from "../../features/auth/operations";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { theme, handleThemeChange } = useTheme();
  const themeOptions = ["light", "dark", "violet"];

  const handleLocalThemeChange = async (selectedTheme) => {
    try {
      // Dispatch the updateUserTheme async thunk to update the user's theme on the backend
      await dispatch(updateUserTheme({ theme: selectedTheme }));

      // Update the theme locally using the context
      handleThemeChange(selectedTheme);
    } catch (error) {
      console.error("Error updating user theme:", error.message);
      // Handle error or dispatch an error action
    }
  };

  return (
    <div className="dropdown " data-bs-theme="dark">
      <button
        className="btn btn-secondary header border-0"
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
            onClick={() => handleLocalThemeChange(themeOption)}
          >
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserTheme } from "../../features/auth/operations";
import { selectIsLoggedIn } from "../../features/auth/selectors";
import { updateUserThemeSuccess } from "../../features/auth/authSlice";

const ThemeSwitcher = () => {
  const [updatedTheme, setUpdatedTheme] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = useSelector((state) => state.auth.user.theme);
  const themeProps = useSelector((state) => state.auth.themeProps);

  const themeOptions = ["light", "dark", "violet"];
  const handleLocalThemeChange = async (selectedTheme) => {
    try {
      if (isLoggedIn) {
        const response = await dispatch(
          updateUserTheme({ theme: selectedTheme })
        );

        if (response.payload && response.payload.user) {
          const themeFromResponse = response.payload.user.theme;
          console.log(updatedTheme(themeFromResponse));
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
    <div data-bs-theme="dark">
      <button
        className="btn header border-0"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ color: themeProps.palette.primary.dark }}
      >
        Theme({theme}) <i className="bi bi-chevron-down"></i>
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

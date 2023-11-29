import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { changeTheme } from "../../features/auth/authSlice";
import { selectTheme } from "../../features/auth/selectors";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const themeOptions = [
    { label: "Light", value: "light" },
    { label: "Violet", value: "violet" },
    { label: "Dark", value: "dark" },
  ];

  const handleThemeChange = (e) => {
    const selectedTheme = e.value;
    dispatch(changeTheme(selectedTheme));
  };

  return (
    <Dropdown
      value={theme}
      options={themeOptions}
      onChange={handleThemeChange}
      placeholder="Theme"
    />
  );
};

export default ThemeSwitcher;

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import UserInfo from "./UserInfo";


const Header = () => {

  return (
    <>
      <div className="header">
        <ul
          className=" d-flex flex-row justify-content-end navbar-nav  "
          style={{
            height: "68px",
          }}
        >
          <li className=" navbar-item align-self-center">
            <ThemeSwitcher />
          </li>
          <li className=" navbar-item align-self-center p-2">
            <UserInfo />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

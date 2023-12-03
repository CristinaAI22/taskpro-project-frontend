import React from "react";
import { Navbar } from "react-bootstrap";
import ThemeSwitcher from "./ThemeSwitcher";
import UserInfo from "./UserInfo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Navbar className={styles.navbar} bg="light" expand="lg">
      <div className="ml-auto">
        <ThemeSwitcher />
      </div>
      <div className="ml-auto">
        <UserInfo />
      </div>
    </Navbar>
    // <>
    //   <header
    //     id="header"
    //     className="header fixed-top d-flex align-items-center"
    //   >
    //     <div className="d-flex align-items-center justify-content-between">
    //       <a href="index.html" className="logo d-flex align-items-center">
    //         <img src="assets/img/logo.png" alt="" />
    //         <span className="d-none d-lg-block">NiceAdmin</span>
    //       </a>
    //       <i className="bi bi-list toggle-sidebar-btn"></i>
    //     </div>
    //     <ThemeSwitcher />
    //     <UserInfo />
    //   </header>
    // </>
  );
};

export default Header;
// import React from "react";
// import ThemeSwitcher from "./ThemeSwitcher";
// import UserInfo from "./UserInfo";
// import styled from "styled-components";

// const HeaderContainer = styled.div`
//   background-color: #333;
//   color: #fff;
//   padding: 10px;
//   display: flex;
//   justify-content: space-between;
//   margin-left: auto;
// `;

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <ThemeSwitcher />
//         <UserInfo />
//       </div>
//     </HeaderContainer>
//   );
// };

// export default Header;
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../features/auth/selectors';
// import { UserMenu } from '../UserMenu/UserMenu';

// const Navbar = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     // <div>
//     //         {!isLoggedIn && (
//     //           <>
//     //             <NavLink to="/login"> Login </NavLink>
//     //             <NavLink to="/register"> Sign Up </NavLink>
//     //           </>
//     //         )}
//     <div>{isLoggedIn && <UserMenu />}</div>

//     // </div>
//   );
// };

// export default Navbar;

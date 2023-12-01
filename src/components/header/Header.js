import ThemeSwitcher from './ThemeSwitcher';
import UserInfo from './UserInfo';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ThemeSwitcher />
      <UserInfo />
    </div>
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

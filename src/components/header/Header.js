// import ThemeSwitcher from "./ThemeSwitcher";
// import UserInfo from "./UserInfo";

// const Header = () => {
//   return (
//     <div>
//       <h1>Header</h1>
//       <ThemeSwitcher />
//       <UserInfo />
//     </div>
//   );
// };
// export default Header;
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import UserInfo from "./UserInfo";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ThemeSwitcher />
        <UserInfo />
      </div>
    </HeaderContainer>
  );
};

export default Header;

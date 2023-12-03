import React from "react";
import { CDBBtn, CDBContainer } from "cdbreact";
import styles from "./styles";
import logout from "./images/logout.svg";
import { NavLink } from "react-router-dom";

const LogOutBtn = () => {
  return (
    <CDBContainer style={styles.btnContainer}>
      <NavLink to="/" className="text-decoration-none">
        <CDBBtn style={styles.logoutBtn}>
          <img alt="logout" src={logout} style={styles.logoutIcon} />
          Log Out
        </CDBBtn>
      </NavLink>
    </CDBContainer>
  );
};
export default LogOutBtn;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CDBBtn, CDBContainer } from 'cdbreact';
import styles from './styles';
import logout from './images/logout.svg';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../features/auth/operations';

const LogOutBtn = () => {
  // const { name } = useSelector((state) => state.auth.user);
  // console.log('Username:', name);
  const dispatch = useDispatch();
  return (
    <CDBContainer style={styles.btnContainer}>
      <NavLink to='/' className='text-decoration-none'>
        <CDBBtn style={styles.logoutBtn} onClick={() => dispatch(logOut())}>
          <img alt='logout' src={logout} style={styles.logoutIcon} />
          Log Out
        </CDBBtn>
      </NavLink>
    </CDBContainer>
  );
};
export default LogOutBtn;

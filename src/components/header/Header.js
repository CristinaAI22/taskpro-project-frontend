import React from 'react';

import ThemeSwitcher from './ThemeSwitcher';
import UserInfo from './UserInfo';
import { useSelector } from 'react-redux';
import { useTheme } from './ThemeContext';

const Header = () => {
  const state = useSelector((state) => state.auth);
  // console.log(state.user);
  const theme = useTheme();
  return (
    <>
      <div className='header'>
        {/* <p style={{ color: theme.palette.primary.info }}>ceva </p> */}
        <ul
          className=' d-flex flex-row justify-content-end navbar-nav  '
          style={{
            height: '68px',
          }}
        >
          <li className=' navbar-item align-self-center'>
            <ThemeSwitcher />
          </li>
          <li className=' navbar-item align-self-center p-2'>
            <UserInfo />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

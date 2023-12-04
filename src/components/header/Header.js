import React from 'react';
import { Navbar } from 'react-bootstrap';
import ThemeSwitcher from './ThemeSwitcher';
import UserInfo from './UserInfo';
import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((state) => state.auth);
  // console.log(state.user);
  return (
    <>
      <div className=' border border-success'>
        <ul
          className=' d-flex flex-row justify-content-end navbar-nav border border-success '
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
    // <Navbar className={styles.navbar} bg="light" expand="lg">

    // </Navbar>
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

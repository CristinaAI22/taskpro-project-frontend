import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBBtn,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import icon from './images/icon.svg';
import plus from './images/plus.svg';
import ModalSidebar from './ModalAdd/ModalSidebar';
import ProjectList from './ProjectList/ProjectList';
import Help from './Help/Help';
import LogOutBtn from './LogOutBtn';
import styles from './styles';

const Sidebar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div style={styles.sidebarStyle}>
      <CDBSidebar textColor='#fff' backgroundColor='#000'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large mt-3'></i>}>
          <div className='row d-flex align-items-center'>
            <img
              src={icon}
              alt='logo'
              className='col-6'
              style={styles.imgLogo}
            />
            <NavLink to='/' className='nav-link col-6'>
              <span style={styles.titleLogo}> Task Pro </span>
            </NavLink>
          </div>
          <p style={styles.boardsTitle} className='p-2'>
            My boards
          </p>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>
              <div
                className='d-flex justify-content-between align-items-center'
                style={styles.board}
              >
                <p className='mt-3' style={styles.textBoard}>
                  Create a new board
                </p>
                <CDBBtn
                  style={styles.btnAdd}
                  onClick={() => setModalShow(true)}
                >
                  <img src={plus} alt='plus' />
                </CDBBtn>
              </div>
              <ModalSidebar
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>
              <ProjectList />
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>
              <Help />
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter> 
            <div>
                <LogOutBtn />
            </div>  
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import styles from '../styles';
import { CDBListGroup, CDBListGroupItem } from 'cdbreact'; 
import trash from '../images/trash.svg';
import pencil from '../images/pencil.svg';
import { CDBBtn } from 'cdbreact';
import ModalSidebarEdit from './ModalSidebarEdit';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllBoards } from '../../../features/board-slice/selectors';
import { iconRadio } from '../ModalAdd/radioOptions';
import { setBoard } from '../../../features/modals/modalsSlice';
import ModalDeleteBoard from '../ModalDeleteBoard/ModalDeleteBoard';

const ProjectList = () => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const projectList = useSelector(selectAllBoards); 
  const handleItemClick = (projectId) => {
    setSelectedItem(selectedItem === projectId ? null : projectId);
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  return (
    <div style={styles.containerProject}>
      <CDBListGroup>
        {projectList.map((project) => (
          <CDBListGroupItem
            key={project._id}
            className={`row-10 d-flex justify-content-between align-items-center m-2 overflow-hidden bgListProject ${
              selectedItem === project._id ? 'active' : ''
            }`}
            style={
              selectedItem === project._id
                ? styles.bgTitleActive
                : styles.listProject
            }
            onClick={() => handleItemClick(project._id)}
          >
            <NavLink to={`/home/${project._id}`}>
              <div className='d-flex align-items-center'>
                <img
                  src={
                    project.icon
                      ? iconRadio[project.icon].image
                      : iconRadio[0].image
                  }
                  alt={`project`}
                />
                <span style={styles.titleProject}>{project.title}</span>
              </div>
            </NavLink>
            <div className='d-flex align-items-center gap-2'>
              <CDBBtn
                onClick={() => {
                  dispatch(setBoard(project));
                  setModalShow(true);
                }}
                style={styles.closeIconStyle}
              >
                <img src={pencil} alt='pencil' />
              </CDBBtn>

              <CDBBtn
                onClick={() => {
                  dispatch(setBoard(project));
                  setModalDeleteShow(true);
                }}
                style={styles.closeIconStyle}
              >
                <img src={trash} alt='trash' />
              </CDBBtn>
            </div>
            {modalShow && (
              <ModalSidebarEdit
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            )}
            {modalDeleteShow && (
              <ModalDeleteBoard
                show={modalDeleteShow}
                onHide={() => setModalDeleteShow(false)}
              />
            )}
          </CDBListGroupItem>
        ))}
      </CDBListGroup>
    </div>
  );
};

export default ProjectList;
import React, { useState } from "react";
import styles from "../styles";
import { CDBListGroup, CDBListGroupItem } from "cdbreact";
import icon_project from "../images/icons/icon_project.svg";
import trash from "../images/trash.svg";
import pencil from "../images/pencil.svg";
import { CDBBtn } from "cdbreact";
import ModalSidebarEdit from "./ModalSidebarEdit";
import { NavLink } from 'react-router-dom';
const ProjectList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const projectList = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" }, 
  ];
  const handleItemClick = (projectId) => {
    setSelectedItem(selectedItem === projectId ? null : projectId);
  };
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <CDBListGroup>
      {projectList.map((project) => (
        <CDBListGroupItem
          key={project.id}
          className={`row-12 d-flex justify-content-between align-items-center bgListProject ${
            selectedItem === project.id ? "active" : ""
          }`}
          style={
            selectedItem === project.id
              ? styles.bgTitleActive
              : styles.listProject
          }
          onClick={() => handleItemClick(project.id)}
        > 
          <div className="d-flex align-items-center">
            <img src={icon_project} alt={`project`} />
            <span style={styles.titleProject}>{project.title}</span>
          </div> 
          <div className="d-flex align-items-center gap-2">
            <CDBBtn
              onClick={() => setModalShow(true)}
              style={styles.closeIconStyle}
            >
              <img src={pencil} alt="pencil" />
            </CDBBtn>
            <img src={trash} alt="trash" />
          </div>
          <ModalSidebarEdit
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </CDBListGroupItem>
      ))}
    </CDBListGroup>
  );
};

export default ProjectList;

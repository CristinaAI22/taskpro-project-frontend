import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../styles";
import plus from "../images/plus2.svg";
import close from "../images/close.svg";
import icon_project from "../images/modal/icon_project.svg";
import star from "../images/modal/star.svg";
import loading from "../images/modal/loading.svg";
import puzzle_piece from "../images/modal/puzzle_piece.svg";
import container from "../images/modal/container.svg";
import lightning from "../images/modal/lightning.svg";
import colors from "../images/modal/colors.svg";
import hexagon from "../images/modal/hexagon.svg";
import help from "../images/help.svg"; 
import { CDBInput, CDBBtn } from "cdbreact";
//import { Formik, Form, Field, ErrorMessage } from "formik";
//import { formikConfig } from '../ModalAdd/FormikConfig';

const ModalSidebarEdit = (props) => { 
  return ( 
    <Modal {...props} size="sm" aria-labelledby="modal-sidebar" centered>
      <Modal.Header>
        <Modal.Title style={styles.addModal}>Edit board</Modal.Title>
        <CDBBtn onClick={props.onHide} style={styles.closeIconStyle}>
          <img src={close} alt="closeIcon" />
        </CDBBtn>
      </Modal.Header>
      <form>
        <Modal.Body>
          <div className="col">
            <div className="row">
              <input
                type="text"
                name="title"
                placeholder="Title"
                component={CDBInput}
                style={styles.inputText}
              /> 
            </div>
            <div className="row">
              <label
                htmlFor="icons"
                className="icons mt-4 mb-3"
                style={styles.icons}
              >
                Icons
              </label>
              <div className="row">
               <div className="col-1">
                  <img src={icon_project} alt="icon_project" />
               </div>
                <div className="col-1">
                 <img src={star} alt="star" />
                </div>
               <div className="col-1">
                 <img src={loading} alt="loading" />
                </div>
                <div className="col-1">
                  <img src={puzzle_piece} alt="puzzle_piece" />
               </div>
                <div className="col-1">
                  <img src={container} alt="container" />
               </div>
               <div className="col-1">
                  <img src={lightning} alt="lightning" />
                </div>
               <div className="col-1">
                  <img src={colors} alt="colors" />
                </div>
                <div className="col-1">
                  <img src={hexagon} alt="hexagon" />
                </div>
              </div>
            </div>
            <div className="row">
              <label htmlFor="background" className="icons mt-4 mb-3">
                Background
              </label>
              <div className="row">
                <div className="col-1">
                  <img
                    src={help}
                    alt="help"
                    style={styles.background_border}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-grid col-12 mx-auto">
            <CDBBtn type="submit" style={styles.btnNewBoard}>
            <img src={plus} alt="plus" style={styles.plusBtn} />
              <span style={styles.textBtn}>Edit</span>
            </CDBBtn>
          </div>
        </Modal.Footer>
      </form>
        </Modal> 
  );
};


export default ModalSidebarEdit;

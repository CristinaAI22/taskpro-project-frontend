
import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../styles";
import icon_project from "../images/icons/icon_project.svg";
import star from "../images/icons/star.svg";
import loading from "../images/icons/loading.svg";
import puzzle_piece from "../images/icons/puzzle_piece.svg";
import container from "../images/icons/container.svg";
import lightning from "../images/icons/lightning.svg";
import colors from "../images/icons/colors.svg";
import hexagon from "../images/icons/hexagon.svg";
import help from "../images/help.svg";
import plus from "../images/plus2.svg";
import { CDBInput, CDBBtn } from "cdbreact";
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import close from "../images/close.svg"; 
import { formikConfig } from './FormikConfig';

const ModalSidebar = (props) => {
  return (
    <Formik {...formikConfig}>
    <Modal {...props} size="sm" aria-labelledby="modal-sidebar" centered>
      <Modal.Header>
        <Modal.Title style={styles.addModal}>New board</Modal.Title>
        <CDBBtn onClick={props.onHide} style={styles.closeIconStyle}>
          <img src={close} alt="closeIcon" />
        </CDBBtn>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <div className="col">
            <div className="row">
              <Field
                type="text"
                name="title"
                placeholder="Title"
                component={CDBInput}
                style={styles.inputText}
              />
              <ErrorMessage
                name="title"
                component="div"
                style={{ color: "red" }}
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
              <span style={styles.textBtn}>Create</span>
            </CDBBtn>
          </div>
        </Modal.Footer>
      </Form>
        </Modal>
    </Formik>
  );
};

export default ModalSidebar;

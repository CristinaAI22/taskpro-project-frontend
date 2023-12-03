import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../styles";
import close from "../images/close.svg";
import { CDBBtn, CDBInput } from "cdbreact";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ModalSidebarHelp = (props) => { 

  const HelpSchema  = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    comment: Yup.string().required("Your comment is required"),
  });

  const initialValues = {
    email: "",
    comment: ""
  };

  return (
    <Modal {...props} size="sm" aria-labelledby="modal-sidebar" centered>
      <Modal.Header>
        <Modal.Title style={styles.addModal}>Need help</Modal.Title>
        <CDBBtn onClick={props.onHide} style={styles.closeIconStyle}>
          <img src={close} alt="closeIcon" />
        </CDBBtn>
      </Modal.Header>
      <Formik
        validationSchema={HelpSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched, 
        }) => (
          <Form>
            <Modal.Body style={styles.bodyHelp}>
              <div>
                <Field
                  name="email" 
                  type="email"
                  placeholder="Email address" 
                  style={styles.inputText}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                <ErrorMessage name="email" component="div" style={styles.errorMsg} />
              </div>
              <div>
                <Field
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  as={CDBInput}
                  style={styles.inputTextarea}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="comment" component="div" style={styles.errorMsg}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-grid col-12 mx-auto">
                <CDBBtn style={styles.btnNewBoard} type="submit">
                  <span style={styles.textBtn}>Send</span>
                </CDBBtn>
              </div>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
export default ModalSidebarHelp;

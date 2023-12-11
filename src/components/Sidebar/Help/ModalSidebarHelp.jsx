import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import styles from "../styles";
import close from "../images/close.svg";
import { CDBBtn } from "cdbreact";
import { selectUser } from "../../../features/auth/selectors";
import Notiflix from "notiflix";
import { addComment } from "../../../features/auth/operations";

const ModalSidebarHelp = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const textRef = useRef();
  const [formData, setFormData] = useState({
    email: user?.email || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
    formDataObject.append("email", formData.email || "");

    const text = textRef.current.value;
    if (text.length < 10) {
      return Notiflix.Notify.failure(
        "Please enter a comment of at least 10 characters"
      );
    }
    console.log("Email:", formData.email);
    console.log("Text:", text);
    try {
      await dispatch(addComment({ email: formData.email, text }));
      Notiflix.Notify.success("Your request has been sent successfully!");
    } catch (error) {
      console.error("Error sending request:", error);
      Notiflix.Notify.failure("Failed to send your request. Please try again.");
    }
  };
  return (
    <Modal {...props} size="sm" aria-labelledby="modal-sidebar" centered>
      <Modal.Header>
        <Modal.Title style={styles.addModal}>Need help</Modal.Title>
        <CDBBtn onClick={props.onHide} style={styles.closeIconStyle}>
          <img src={close} alt="closeIcon" />
        </CDBBtn>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body style={styles.bodyHelp}>
          <div>
            <strong>Email: </strong>
            {user?.email}
          </div>
          <div>
            <input
              type="text"
              name="comment"
              placeholder="Comment"
              style={styles.inputTextarea}
              ref={textRef}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-grid col-12 mx-auto">
            <CDBBtn style={styles.btnNewBoard} type="submit">
              <span style={styles.textBtn}>Send</span>
            </CDBBtn>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalSidebarHelp;

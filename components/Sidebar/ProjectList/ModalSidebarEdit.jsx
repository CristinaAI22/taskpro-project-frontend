import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
//import Form from "react-bootstrap/Form";
import Notiflix from 'notiflix';
import { editBoard } from '../../../features/board-slice/operations';
import { iconRadio, BackgroundRadio } from '../ModalAdd/radioOptions';
import { CDBBtn } from 'cdbreact';
import styles from '../styles';
import plus from '../images/plus2.svg';
import close from '../images/close.svg';
import { selectBoard } from '../../../features/modals/selectors';

const ModalSidebarEdit = (props) => {
  const board = useSelector(selectBoard);

  const [selectedIcon, setSelectedIcon] = useState(
    board.icon ? iconRadio[board.icon].value : iconRadio[0].value
  );
  const [selectedIconImg, setSelectedIconImg] = useState(
    board.icon ? board.icon : 0
  );
  const [selectedBackground, setSelectedBackground] = useState(
    board.backgroundImg
      ? BackgroundRadio[board.backgroundImg].value
      : BackgroundRadio[0].value
  );
  const [selectedBackgroundImg, setSelectedBackgroundImg] = useState(
    board.backgroundImg ? board.backgroundImg : 0
  );

  const dispatch = useDispatch();
  const titleRef = useRef();

  const handleIconChange = (e) => {
    const selectedIcon = e.target.value;
    setSelectedIcon(selectedIcon);
  };

  const handleBackgroundChange = (e) => {
    const selectedBackground = e.target.value;
    setSelectedBackground(selectedBackground);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const title = titleRef.current.value;
    if (title.length < 3) {
      return Notiflix.Notify.failure(
        'Please enter a title of at least 3 characters'
      );
    }

    const data = {
      title,
      icon: selectedIconImg,
      backgroundImg: selectedBackgroundImg !== 0 ? selectedBackgroundImg : null,
    };
    const credentials = { _id: board._id, data };

    dispatch(editBoard(credentials));
    props.onHide();
  };

  return (
    <Modal {...props} size='sm' aria-labelledby='modal-sidebar' centered>
      <Modal.Header>
        <Modal.Title style={styles.addModal}>Edit board</Modal.Title>
        <CDBBtn onClick={props.onHide} style={styles.closeIconStyle}>
          <img src={close} alt='closeIcon' />
        </CDBBtn>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className='col'>
            <div className='row'>
              <input
                type='text'
                name='title'
                defaultValue={board.title}
                placeholder='Title'
                style={styles.inputText}
                ref={titleRef}
                required
              />
            </div>

            {/* Icons */}
            <div className='row'>
              <label className='icons mt-4 mb-3'>Icons</label>
              <div className='row'>
                {iconRadio.map((option, index) => (
                  <div
                    key={option.value}
                    className={`radio-option col-1 m-1 ${
                      selectedIcon === option.value ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setSelectedIcon(option.value);
                      setSelectedIconImg(index);
                    }}
                  >
                    <img
                      src={option.image}
                      alt={option.value}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '3px',
                        marginBottom: '5px',
                        boxShadow:
                          selectedIcon === option.value
                            ? 'inset 0 0 10px 2px #BEDBB0'
                            : 'none',
                      }}
                    />
                    <input
                      type='radio'
                      name='radioGroupIcon'
                      value={option.value}
                      checked={selectedIcon === option.value}
                      onChange={handleIconChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Background */}
            <div className='row'>
              <label className='icons mt-4 mb-3'>Background</label>
              <div className='row'>
                {BackgroundRadio.map((option, index) => (
                  <div
                    key={option.value}
                    className={`radio-option col-1 m-1 ${
                      selectedBackground === option.value ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setSelectedBackground(option.value);
                      setSelectedBackgroundImg(index);
                    }}
                  >
                    <img
                      src={option.image}
                      alt={option.value}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '3px',
                        marginBottom: '5px',
                        border:
                        selectedBackground === option.value
                          ? '2px solid #BEDBB0'
                          : 'none',
                    }}
                  />
                    <input
                      type='radio'
                      name='radioGroupBackground'
                      value={option.value}
                      checked={selectedBackground === option.value}
                      onChange={handleBackgroundChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-grid col-12 mx-auto'>
            <CDBBtn type='submit' style={styles.btnNewBoard}>
              <img src={plus} alt='plus' style={styles.plusBtn} />
              <span style={styles.textBtn}>Edit</span>
            </CDBBtn>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalSidebarEdit;

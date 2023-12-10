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
                        border:
                          selectedIcon === option.value
                            ? '1px solid red'
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
                            ? '1px solid red'
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

// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import styles from '../styles';
// import plus from '../images/plus2.svg';
// import close from '../images/close.svg';
// import icon_project from '../images/modal/icon_project.svg';
// import star from '../images/modal/star.svg';
// import loading from '../images/modal/loading.svg';
// import puzzle_piece from '../images/modal/puzzle_piece.svg';
// import container from '../images/modal/container.svg';
// import lightning from '../images/modal/lightning.svg';
// import colors from '../images/modal/colors.svg';
// import hexagon from '../images/modal/hexagon.svg';
// import help from '../images/help.svg';
// import { CDBInput, CDBBtn } from 'cdbreact';
// //import { Formik, Form, Field, ErrorMessage } from "formik";
// //import { formikConfig } from '../ModalAdd/FormikConfig';

// const ModalSidebarEdit = (props) => {
//   return (
//     <Modal {...props} size='sm' aria-labelledby='modal-sidebar' centered>
//       <Modal.Header>
//         <Modal.Title style={styles.addModal}>Edit board</Modal.Title>
//         <CDBBtn onClick={props.onHide} style={styles.closeIconStyle}>
//           <img src={close} alt='closeIcon' />
//         </CDBBtn>
//       </Modal.Header>
//       <form>
//         <Modal.Body>
//           <div className='col'>
//             <div className='row'>
//               <input
//                 type='text'
//                 name='title'
//                 placeholder='Title'
//                 component={CDBInput}
//                 style={styles.inputText}
//               />
//             </div>
//             <div className='row'>
//               <label
//                 htmlFor='icons'
//                 className='icons mt-4 mb-3'
//                 style={styles.icons}
//               >
//                 Icons
//               </label>
//               <div className='row'>
//                 <div className='col-1'>
//                   <img src={icon_project} alt='icon_project' />
//                 </div>
//                 <div className='col-1'>
//                   <img src={star} alt='star' />
//                 </div>
//                 <div className='col-1'>
//                   <img src={loading} alt='loading' />
//                 </div>
//                 <div className='col-1'>
//                   <img src={puzzle_piece} alt='puzzle_piece' />
//                 </div>
//                 <div className='col-1'>
//                   <img src={container} alt='container' />
//                 </div>
//                 <div className='col-1'>
//                   <img src={lightning} alt='lightning' />
//                 </div>
//                 <div className='col-1'>
//                   <img src={colors} alt='colors' />
//                 </div>
//                 <div className='col-1'>
//                   <img src={hexagon} alt='hexagon' />
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <label htmlFor='background' className='icons mt-4 mb-3'>
//                 Background testing
//               </label>
//               <div className='row'>
//                 <div className='col-1'>
//                   <img src={help} alt='help' style={styles.background_border} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <div className='d-grid col-12 mx-auto'>
//             <CDBBtn type='submit' style={styles.btnNewBoard}>
//               <img src={plus} alt='plus' style={styles.plusBtn} />
//               <span style={styles.textBtn}>Edit</span>
//             </CDBBtn>
//           </div>
//         </Modal.Footer>
//       </form>
//     </Modal>
//   );
// };

// export default ModalSidebarEdit;

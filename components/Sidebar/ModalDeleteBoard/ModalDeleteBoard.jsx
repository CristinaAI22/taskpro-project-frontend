import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard } from '../../../features/board-slice/operations';
import { selectBoard } from '../../../features/modals/selectors';
import { useNavigate } from 'react-router-dom';
import { deleteBoardData } from '../../../features/board-slice/boardSlice';

import Modal from 'react-bootstrap/Modal';
import { CDBBtn } from 'cdbreact';
import styles from '../styles';
import close from '../images/close.svg';

const ModalDeleteBoard = (props) => {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const navigate = useNavigate();

  return (
    <Modal {...props} size='sm' aria-labelledby='modal-sidebar' centered>
      <Modal.Header>
        <Modal.Title style={styles.addModal}>
          Delte board <span style={{ color: '#9dc888' }}>{board.title}</span>?
        </Modal.Title>
        <CDBBtn onClick={props.onHide} style={styles.closeIconStyle}>
          <img src={close} alt='closeIcon' />
        </CDBBtn>
      </Modal.Header>
      <Modal.Footer>
        <div className='d-grid col-4 mx-auto'>
          <CDBBtn
            onClick={() => {
              dispatch(deleteBoard({ _id: board._id }));
              dispatch(deleteBoardData());
              navigate('/home', { replace: true });
              props.onHide();
            }}
            style={styles.btnNewBoard}
          >
            <span style={styles.textBtn}>Delete</span>
          </CDBBtn>
        </div>
        <div className='d-grid col-4 mx-auto'>
          <CDBBtn onClick={props.onHide} style={styles.btnNewBoard}>
            <span style={styles.textBtn}>Cancel</span>
          </CDBBtn>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalDeleteBoard;

// dispatch(deleteList({ _id: list._id }));

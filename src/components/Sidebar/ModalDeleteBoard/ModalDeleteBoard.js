import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteBoardModal } from '../../../features/modals/modalsSlice';
import { deleteBoard } from '../../../features/board-slice/operations';
import { selectBoard } from '../../../features/modals/selectors';

const ModalDeleteBoard = () => {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  const handleDelete = () => {
    dispatch(closeDeleteBoardModal());
  };

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <h4 className='text-light pt-4'>Delete column {board.title} ?</h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeDeleteBoardModal())}
          >
            <i className='bi bi-x-lg fw-bold'></i>
          </button>
        </div>
        <div className='mt-5'>
          <button
            type='button'
            className='py-2 modals-buttons rounded-2'
            onClick={handleDelete}
          >
            <i className='bi bi-trash'></i> Delete
          </button>
          <button
            type='button'
            className='py-2 modals-buttons rounded-2 ms-4'
            onClick={() => dispatch(closeDeleteBoardModal())}
          >
            <i className='bi bi-x-square-fill'></i> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalDeleteBoard;

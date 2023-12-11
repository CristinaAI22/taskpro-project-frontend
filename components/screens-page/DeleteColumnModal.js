import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteColumnModal } from '../../features/modals/modalsSlice';
import { selectBoardId } from '../../features/board-slice/selectors';
import {
  deleteList,
  getBoardData,
} from '../../features/board-slice/operations';
import { selectListToEdit } from '../../features/modals/selectors';

const DeleteColumnModal = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectListToEdit);
  const boardId = useSelector(selectBoardId);

  const handleDelete = () => {
    dispatch(deleteList({ _id: list._id }));
    dispatch(getBoardData({ _id: boardId }));
    dispatch(closeDeleteColumnModal());
  };

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <h4 className='text-light pt-4'>Delete column {list.title} ?</h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeDeleteColumnModal())}
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
            onClick={() => dispatch(closeDeleteColumnModal())}
          >
            <i className='bi bi-x-square-fill'></i> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteColumnModal;

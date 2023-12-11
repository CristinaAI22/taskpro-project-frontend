import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteCardModal } from '../../features/modals/modalsSlice';
import { deleteCard } from '../../features/board-slice/operations';
import { selectCard } from '../../features/modals/selectors';

const DeleteCardModal = () => {
  const dispatch = useDispatch();
  const card = useSelector(selectCard);

  const handleDelete = () => {
    dispatch(deleteCard({ _id: card._id }));
    dispatch(closeDeleteCardModal());
  };

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <h4 className='text-light pt-4'>Delete card {card.title} ?</h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeDeleteCardModal())}
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
            onClick={() => dispatch(closeDeleteCardModal())}
          >
            <i className='bi bi-x-square-fill'></i> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteCardModal;

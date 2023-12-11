import { useDispatch, useSelector } from 'react-redux';
import { closeColumnModal } from '../../features/modals/modalsSlice';
import Notiflix from 'notiflix';
import { useRef } from 'react';
import { selectBoardId } from '../../features/board-slice/selectors';
import { addList } from '../../features/board-slice/operations';

const AddColumnModal = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const owner = useSelector(selectBoardId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value;

    if (title.length < 3) {
      return Notiflix.Notify.failure(
        'Please enter a title of at least 3 characters'
      );
    }

    const credentials = { owner, title };
    dispatch(addList(credentials));
    dispatch(closeColumnModal());
  };

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <h4 className='text-light'>Add column</h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeColumnModal())}
          >
            <i className='bi bi-x-lg fw-bold'></i>
          </button>
        </div>
        <form
          className='d-flex flex-column mt-4 p-2 w-100'
          onSubmit={handleSubmit}
        >
          <label className='mb-3 p-0 w-100'>
            <input
              type='text'
              placeholder='Title'
              className='w-100 rounded-2 p-2 bg-black text-light add-column-input'
              ref={inputRef}
            />
          </label>
          <button type='submit' className='py-2 modals-buttons rounded-2 w-100'>
            <i className='bi bi-plus-square-fill me-1'></i> Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddColumnModal;

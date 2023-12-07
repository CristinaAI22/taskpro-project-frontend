import { useDispatch, useSelector } from 'react-redux';
import { closeEditColumnModal } from '../../features/modals/modalsSlice';
import Notiflix from 'notiflix';
import { useRef } from 'react';
import { editList, getBoardData } from '../../features/board-slice/operations';
import { selectListToEdit } from '../../features/modals/selectors';
import { selectBoardId } from '../../features/board-slice/selectors';

const EditListModal = () => {
  const list = useSelector(selectListToEdit);
  const defaultTitle = list.title;
  const _id = list._id;
  const dispatch = useDispatch();
  const inputRef = useRef();
  const boardId = useSelector(selectBoardId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value;

    if (title.length < 3) {
      return Notiflix.Notify.failure(
        'Please enter a title of at least 3 characters'
      );
    }

    const data = { title };

    const credentials = { _id, data };
    dispatch(editList(credentials));
    dispatch(getBoardData({ _id: boardId }));
    dispatch(closeEditColumnModal());
  };

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <h4 className='text-light'>
            Edit <span className='color-green'>{defaultTitle}</span> column
          </h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeEditColumnModal())}
          >
            <i className='bi bi-x-lg fw-bold'></i>
          </button>
        </div>
        <form className='row mt-4 p-2' onSubmit={handleSubmit}>
          <label className='mb-3 p-0'>
            <input
              type='text'
              placeholder='Title'
              className='w-100 rounded-2 p-2 bg-black text-light add-column-input'
              defaultValue={defaultTitle}
              ref={inputRef}
            />
          </label>
          <button type='submit' className='py-2 modals-buttons rounded-2'>
            <i className='bi bi-plus-square-fill me-1'></i> Edit
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditListModal;

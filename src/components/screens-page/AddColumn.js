import { useDispatch } from 'react-redux';
import { openColumnModal } from '../../features/modals/modalsSlice';

const AddColumn = () => {
  const dispatch = useDispatch();

  return (
    <div className='col-12 col-sm-6 col-md-4 bg-transparent p-1 rounded-2'>
      <button
        className='bg-dark text-light d-flex m-auto border-0 w-100 d-flex justify-content-center p-3 rounded-2 '
        onClick={() => dispatch(openColumnModal())}
      >
        {' '}
        <div className='btn-icon bg-white text-black fs-3 fw-bold me-2'>+</div>
        Add another column
      </button>
    </div>
  );
};
export default AddColumn;

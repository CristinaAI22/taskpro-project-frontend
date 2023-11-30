import { useDispatch } from 'react-redux';
import filterIcon from './icons/filter-icon.svg';
import { openFilterModal } from '../../features/modals/modalsSlice';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <button
      className='filter-button text-light filter-btn'
      onClick={() => dispatch(openFilterModal())}
    >
      <img src={filterIcon} alt='Filter Icon' className='filter-icon' />
      Filters
    </button>
  );
};
export default Filters;

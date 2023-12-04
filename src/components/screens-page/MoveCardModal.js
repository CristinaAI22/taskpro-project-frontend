import { useDispatch, useSelector } from 'react-redux';
import { closeMoveCardModal } from '../../features/modals/modalsSlice';
import Notiflix from 'notiflix';
import {
  selectBoardId,
  selectBoardLists,
} from '../../features/board-slice/selectors';
import { moveCard } from '../../features/board-slice/operations';
import { selectCard } from '../../features/modals/selectors';

const MoveCardModal = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectBoardLists);
  const { _id } = useSelector(selectCard);

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeMoveCardModal())}
          >
            <i className='bi bi-x-lg fw-bold'></i>
          </button>

          <ul className='main-move-card-modal pt-5'>
            {lists.map((list) => {
              return (
                <li key={list._id} className={'move-card-li'}>
                  <p>{list.title}</p>
                  <button className='bg-transparent border-0 text-secondary'>
                    <i className='bi bi-arrow-right-circle'></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MoveCardModal;

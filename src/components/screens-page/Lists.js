import { useDispatch, useSelector } from 'react-redux';
import { selectBoardLists } from '../../features/board-slice/selectors';
import {
  openEditColumnModal,
  openDeleteColumnModal,
  openAddCardModal,
} from '../../features/modals/modalsSlice';
import {
  selectEditColumnModal,
  selectDeleteColumnModal,
  selectAddCardModal,
} from '../../features/modals/selectors';
import EditListModal from './EditListModal';
import DeleteColumnModal from './DeleteColumnModal';
import { labelColor } from './FilterModal';
import AddCardModal from './AddCardModal';

const Lists = () => {
  const lists = useSelector(selectBoardLists);

  return (
    <>
      {lists.map((list) => {
        return (
          <div
            key={list._id}
            className='main-dashboard-lists col-12 col-sm-6 col-md-4  bg-secondary p-3 rounded-2'
          >
            <ListTitle list={list} />
          </div>
        );
      })}
    </>
  );
};
export default Lists;

function ListTitle({ list }) {
  const dispatch = useDispatch();
  const { title } = list;
  const editColumnModal = useSelector(selectEditColumnModal);
  const deleteColumnModal = useSelector(selectDeleteColumnModal);
  const addCardModal = useSelector(selectAddCardModal);
  const cards = list.cards;

  return (
    <div className='column-title-card text-light '>
      <div className='list-title-card d-flex justify-content-between p-3 bg-dark rounded-2 mb-3'>
        <h5>{title}</h5>
        <div className='list-title-btns-container'>
          <button
            className='list-title-btns bg-transparent text-secondary border-0'
            onClick={() => dispatch(openEditColumnModal(list))}
          >
            <i className='bi bi-pencil'></i>
          </button>
          <button
            className='list-title-btns bg-transparent text-secondary border-0 ms-1'
            onClick={() => dispatch(openDeleteColumnModal(list))}
          >
            <i className='bi bi-trash3'></i>
          </button>
        </div>
      </div>
      <div className='cards-container'>
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
        <button
          className='py-3 modals-buttons rounded-2 w-100'
          onClick={() => dispatch(openAddCardModal(list._id))}
        >
          <i className='bi bi-plus-square-fill me-1'></i> Add
        </button>
      </div>
      {editColumnModal && <EditListModal />}
      {deleteColumnModal && <DeleteColumnModal />}
      {addCardModal && <AddCardModal />}
    </div>
  );
}

function Card({ card }) {
  const { title, description, _id, labelColor: color, deadline, owner } = card;
  const colorObject = labelColor.find((item) => item.color === color);
  const thisDay = new Date().toLocaleDateString();
  const today = thisDay === deadline;

  return (
    <div
      style={{ borderLeft: `5px solid ${color}` }}
      className='card-list-container p-3 bg-dark rounded-2 text-light mb-2'
    >
      <div className='card-text-container text-start border-bottom border-light-subtle'>
        <h6>{title}</h6>
        <p className='text-secondary '>{description}</p>
      </div>

      <div className='card-options-container mt-3 d-flex justify-content-between align-items-center'>
        <ul className='options-container-display d-flex p-0'>
          <li className='priority-container d-flex flex-column'>
            <p className='font-size-10 mb-1 text-secondary text-start'>
              Priority
            </p>
            <div className='d-flex justify-content-center align-items-center'>
              <div
                className='label-color-display'
                style={{ backgroundColor: `${color}` }}
              ></div>
              <p className='m-0 ms-1 font-size-10'>
                {colorObject ? colorObject.name.toUpperCase() : 'Not set'}
              </p>
            </div>
          </li>
          <li className='priority-container d-flex flex-column ms-3'>
            <p className='font-size-10 mb-1 text-secondary text-start'>
              Deadline
            </p>

            <p className='m-0 font-size-10'>{deadline}</p>
          </li>
        </ul>

        <div className='card-options-btns-container'>
          {today && (
            <button className='bg-transparent border-0 color-green'>
              <i className='bi bi-bell'></i>
            </button>
          )}
          <button className='bg-transparent border-0 text-secondary'>
            <i className='bi bi-arrow-right-circle'></i>
          </button>
          <button className='bg-transparent border-0 text-secondary'>
            <i className='bi bi-pencil'></i>
          </button>
          <button className='bg-transparent border-0 text-secondary'>
            {' '}
            <i className='bi bi-trash3'></i>
          </button>
        </div>
      </div>
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { closeAddCardModal } from '../../features/modals/modalsSlice';
import Notiflix from 'notiflix';
import { useRef, useState } from 'react';
import { selectListId } from '../../features/modals/selectors';
// import { addList } from '../../features/board-slice/operations';
import { labelColor } from './FilterModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { addCard } from '../../features/board-slice/operations';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AddCardModal = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const textRef = useRef();
  const owner = useSelector(selectListId);
  const currentDate = new Date();
  const [selectedColor, setSelectedColor] = useState(null);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const month = selectedDate ? selectedDate.getMonth() : currentDate.getMonth();
  const day = selectedDate
    ? selectedDate.getDate().toString().padStart(2, '0')
    : currentDate.getDate().toString().padStart(2, '0');

  const onChange = (date) => {
    if (date >= currentDate) {
      setSelectedDate(date);
      setDisplayCalendar(!displayCalendar);
    } else {
      return Notiflix.Notify.warning(
        'You cannot select a date before the current date.'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const text = textRef.current.value;

    if (title.length < 3) {
      return Notiflix.Notify.failure(
        'Please enter a title of at least 3 characters'
      );
    }
    const credentials = {
      owner,
      title,
      description: text,
      labelColor: selectedColor ? selectedColor : labelColor[0].color,
      deadline: selectedDate ? selectedDate.toLocaleDateString() : 'Not set',
    };
    dispatch(addCard(credentials));
    dispatch(closeAddCardModal());
  };

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <h4 className='text-light text-start'>Add card</h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeAddCardModal())}
          >
            <i className='bi bi-x-lg fw-bold'></i>
          </button>
        </div>
        <form className='row mt-4 p-0' onSubmit={handleSubmit}>
          <label className='mb-3 p-0'>
            <input
              type='text'
              placeholder='Title'
              className='w-100 rounded-2 p-2 bg-black text-light add-column-input'
              ref={titleRef}
            />
          </label>
          <label className='mb-3 p-0'>
            <textarea
              className='w-100 rounded-2 p-2 bg-black text-light add-column-input'
              placeholder='Description'
              rows='4'
              cols='50'
              ref={textRef}
            ></textarea>
          </label>
          <div className='add-card-colors-container text-start'>
            <p className='fs-6 text-secondary mb-1'>Label color</p>
            <ul className='add-card-colors'>
              {labelColor.map((color) => {
                const inputClassName = `color-input-div ${color.name
                  .toLowerCase()
                  .replace(' ', '-')}-input`;
                const divClassName = `color-div ${
                  selectedColor === color.color ? 'selected' : ''
                } `;
                return (
                  <li
                    key={color.name}
                    className={divClassName}
                    onClick={() => handleColorChange(color.color)}
                  >
                    <label className='label-color-filter'>
                      <input
                        type='radio'
                        name='options'
                        value={color.color}
                        className='filter-input'
                      />
                      <div className={inputClassName}></div>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='add-card-date-container  text-start'>
            <p className='fs-6 text-secondary mb-1'>Deadline</p>
            <div className='add-card-set-date-container d-flex align-items-center mb-2'>
              <p className='fs-6 color-green m-0'>
                Today, {monthNames[month]} {day}
              </p>
              <div
                className='bg-transparent border-0 m-0 p-0 ms-2'
                onClick={() => setDisplayCalendar(!displayCalendar)}
              >
                <i className='bi bi-caret-down-fill color-green'></i>
              </div>
              {displayCalendar && (
                <div className='react-calendar-container'>
                  <Calendar
                    onChange={onChange}
                    value={currentDate}
                    minDate={currentDate}
                  />
                </div>
              )}
            </div>
          </div>

          <button
            type='submit'
            className='py-2 modals-buttons rounded-2 w-100 mt-4'
          >
            <i className='bi bi-plus-square-fill me-1'></i> Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddCardModal;

import { useDispatch, useSelector } from 'react-redux';
import { closeEditCardModal } from '../../features/modals/modalsSlice';
import Notiflix from 'notiflix';
import { useRef, useState } from 'react';
import { selectListId, selectCard } from '../../features/modals/selectors';
import { editCard } from '../../features/board-slice/operations';
import { labelColor } from './FilterModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { addCard } from '../../features/board-slice/operations';
import { monthNames, daysOfWeek } from './AddCardModal';

const EditCardModal = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const textRef = useRef();

  const card = useSelector(selectCard);
  const {
    _id,
    title,
    owner,
    labelColor: cardLabelColor,
    description,
    deadline,
  } = card;

  const parts = deadline.split('/');
  const formattedDateString = `${parts[1]} ${parts[0]} ${parts[2]}`;
  const dateObject = new Date(formattedDateString);

  const currentDate = new Date();
  const [selectedColor, setSelectedColor] = useState(cardLabelColor);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dateObject);
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

  let weekDay = null;
  if (selectedDate) {
    if (
      selectedDate.toLocaleDateString() === currentDate.toLocaleDateString()
    ) {
      weekDay = 'Today';
    } else {
      const dayOfWeekNumber = selectedDate.getDay();
      weekDay = daysOfWeek[dayOfWeekNumber];
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const text = textRef.current.value;

    if (title.length < 3) {
      return Notiflix.Notify.failure(
        'Please enter a title of at least 3 characters'
      );
    }
    const data = {
      owner,
      title,
      description: text,
      labelColor: selectedColor ? selectedColor : labelColor[0].color,
      deadline: selectedDate ? selectedDate.toLocaleDateString() : 'Not set',
    };
    dispatch(editCard({ _id, data }));
    dispatch(closeEditCardModal());
  };

  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative'>
          <h4 className='text-light text-start'>Edit card</h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeEditCardModal())}
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
              defaultValue={title}
              ref={titleRef}
            />
          </label>
          <label className='mb-3 p-0'>
            <textarea
              className='w-100 rounded-2 p-2 bg-black text-light add-column-input'
              placeholder='Description'
              rows='4'
              cols='50'
              defaultValue={description}
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
                {weekDay ? weekDay : 'Today'}, {monthNames[month]} {day}
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
            <i className='bi bi-plus-square-fill me-1'></i> Edit
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditCardModal;

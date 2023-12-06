import { useDispatch, useSelector } from 'react-redux';
import { closeFilterModal } from '../../features/modals/modalsSlice';
import { useState } from 'react';
import { setFilter, resetFilter } from '../../features/board-slice/boardSlice';
import { selectBoardFilter } from '../../features/board-slice/selectors';

export const labelColor = [
  { name: 'Without priority', color: '#FFFFFF4D' },
  { name: 'Low', color: '#8FA1D0' },
  { name: 'Medium', color: '#E09CB5' },
  { name: 'High', color: '#BEDBB0' },
];

const FilterModal = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectBoardFilter);
  const [selectedColor, setSelectedColor] = useState(filter ? filter : null);
  const handleColorChange = (color) => {
    setSelectedColor(color);
    dispatch(setFilter(color));
  };
  return (
    <div className='modals-container'>
      <div className='bg-dark modal-inner-container p-4'>
        <div className='filter-modal-header w-100 position-relative border-bottom'>
          <h4 className='text-light'>Filters</h4>
          <button
            className='text-light filter-btn position-btn-right'
            onClick={() => dispatch(closeFilterModal())}
          >
            <i className='bi bi-x-lg fw-bold'></i>
          </button>
        </div>
        <div className='filter-modal-main d-flex justify-content-between align-items-start pt-2'>
          <form className='label-color-form'>
            <p className='fs-6 text-light'>Label color</p>
            {labelColor.map((color, index) => {
              const inputClassName = `color-input-div ${color.name
                .toLowerCase()
                .replace(' ', '-')}-input`;
              const divClassName = `color-div ${
                selectedColor === color.color ? 'selected' : ''
              } `;
              return (
                <div
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
                    {color.name}
                  </label>
                </div>
              );
            })}
          </form>
          <button
            className='btn btn-link text-light m-0 p-0'
            onClick={() => dispatch(resetFilter())}
          >
            Show all
          </button>
        </div>
      </div>
    </div>
  );
};
export default FilterModal;

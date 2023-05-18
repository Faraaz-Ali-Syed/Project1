import React from 'react';

import './ExpensesFilter.css';

const ShoeFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Size</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='S'>S</option>
          <option value='M'>M</option>
          <option value='L'>L</option>
          <option value='XL'>XL</option>
        </select>
      </div>
    </div>
  );
};

export default ShoeFilter;
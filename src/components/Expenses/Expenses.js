import React, { useState } from 'react';

import Card from '../UI/Card';
import ShoeFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('S');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.size === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ShoeFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
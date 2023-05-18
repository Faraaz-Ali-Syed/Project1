import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredSize, setEnteredSize] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  
  const sizeChangeHandler = (event) => {
    setEnteredSize(event.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredName,
      amount: enteredAmount,
      size: enteredSize
     
    };

    props.onSaveExpenseData(expenseData);
    setEnteredName('');
    setEnteredAmount('');
    setEnteredSize('');
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Shoe Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Size</label>
          <input
            type='text'
            min='0.01'
            step='0.01'
            value={enteredSize}
            onChange={sizeChangeHandler}
          />
        </div>
     
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
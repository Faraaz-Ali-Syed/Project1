import React from 'react';


import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      
      <div className='expense-item__description'>
        <h2>{props.name}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <div className='expense-item__price'>${props.size}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
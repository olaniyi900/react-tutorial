import React, { useState } from 'react';
import './expenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({ title, amount, date }) {
  const [name, setTitle] = useState(title);
  const changeTitleHandler = () => {
    setTitle('New Title');
    console.log(name);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{name}</h2>
        <div className='expense-item__price'>
          <p>${amount}</p>
        </div>
      </div>
      <button onClick={changeTitleHandler}>submit</button>
    </Card>
  );
}

export default ExpenseItem;

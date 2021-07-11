import React from 'react';
import './expenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({ title, amount, date }) {
  // const [name, setTitle] = useState(title);

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>
          <p>${amount}</p>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

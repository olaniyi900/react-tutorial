import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './expenses.css';

function Expenses({ expenses }) {
  const [year, setYear] = useState('2020');

  const sendYear = (enterYear) => {
    setYear(enterYear);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesOutput = <p style={{ color: 'white' }}>There is no expenses</p>;
  if (filterExpenses.length > 0) {
    expensesOutput = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <ExpensesFilter year={year} sendYear={sendYear} />
      <Card className='expenses'>{expensesOutput}</Card>
    </div>
  );
}

export default Expenses;

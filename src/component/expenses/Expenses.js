import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './expenses.css';

function Expenses({ expenses }) {
  const [year, setYear] = useState('2020');

  const sendYear = (enterYear) => {
    setYear(enterYear);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <ExpensesFilter year={year} sendYear={sendYear} />
      <Card className='expenses'>
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;

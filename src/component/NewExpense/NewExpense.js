import React from 'react';
import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const NewExpense = ({ onSaveExpensesData }) => {
  // const saveExpenseData = (enterExpenseData) => {
  //   const expenseData = {
  //     ...enterExpenseData,
  //     id: Math.random().toString(),
  //   };
  //   console.log(expenseData);
  // };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpensesData={onSaveExpensesData} />
    </div>
  );
};

export default NewExpense;

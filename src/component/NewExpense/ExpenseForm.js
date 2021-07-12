import React, { useState } from 'react';
import './expenseForm.css';

const ExpenseForm = ({ onSaveExpensesData }) => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');
  const [showForm, setShowForm] = useState(false);

  const titleHandler = (event) => {
    setEnterTitle((prevState) => {
      return event.target.value;
    });
  };

  const amountHandler = (event) => {
    setEnterAmount((prevState) => {
      return event.target.value;
    });
  };

  const dateHandler = (event) => {
    setEnterDate((prevState) => {
      return event.target.value;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    onSaveExpensesData(data);

    setEnterAmount('');
    setEnterDate('');
    setEnterTitle('');
  };

  const showFormHadler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label htmlFor=''>Title</label>
              <input type='text' value={enterTitle} onChange={titleHandler} />
            </div>

            <div className='new-expense__control'>
              <label htmlFor=''>Amount</label>
              <input
                type='number'
                min='0.01'
                step='0.01'
                value={enterAmount}
                onChange={amountHandler}
              />
            </div>

            <div className='new-expense__control'>
              <label htmlFor=''>Title</label>
              <input
                type='date'
                min='2019-01-01'
                max='2022-12-31'
                value={enterDate}
                onChange={dateHandler}
              />
            </div>
          </div>

          <div className='new-expense__actions'>
            <button type='button' onClick={hideFormHandler}>
              Cancel
            </button>
          </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
          </div>
        </form>
      ) : (
        <div className='new-expense__actions'>
          <button type='button' onClick={showFormHadler}>
            Add Expenses
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;

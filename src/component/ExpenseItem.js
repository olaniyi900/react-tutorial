import './expenseItem.css';

function ExpenseItem({ title, amount, date }) {
  return (
    <div className='expense-item'>
      <div>
        <h3>{date.toString()}</h3>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>
          <p>${amount}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;

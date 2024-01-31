import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('all');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    if (filteredYear === 'all') {
      return true; 
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = null;

  if (filteredExpenses.length === 0) {
    expensesContent = <p>No Expenses Found for the selected year.</p>;
  } else if (filteredExpenses.length === 1) {
    expensesContent = (
      <div>
        <p>Only single Expense here. Please add more...</p>
        <ExpenseItem
          key={filteredExpenses[0].id}
          title={filteredExpenses[0].title}
          amount={filteredExpenses[0].amount}
          date={filteredExpenses[0].date}
        />
      </div>
    );
  } else {
    expensesContent = filteredExpenses.map((expense) => (
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
      <Card className='expenses'>
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;

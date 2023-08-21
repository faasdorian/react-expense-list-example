import './style.css';
import React from 'react';

const ExpensesFilter = (props) => {

  const expensesDate = props.expenses
    .map(expense => expense.date.getFullYear())
    .filter((year, index, years) => years.indexOf(year) === index)


  const onFilterChange = event => {
    props.onFilterChange(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onFilterChange} value={props.selected} >
          <option value='All'>All</option>
          {
            expensesDate.map((year, index) => {
              return <option key={index} value={year}>{year}</option>
            })
          }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
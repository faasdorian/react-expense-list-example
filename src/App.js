import AddExpenseSection from "./components/AddExpenseSection";
import ExpensesFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {

  const [expenses, setExpenses] = useState([])
  const [filteredYear, setFilteredYear] = useState('All')

  const saveNewExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const onFilterChange = (year) => {
    setFilteredYear(year)
  }

  return (
    <div className="App">
      <AddExpenseSection key='add-expense-section' onNewExpense={saveNewExpense} />
      {
        expenses.length === 0 && <p className='no-expenses' >No expenses found. Try adding some!</p>
      }
      {
        expenses.length > 0 &&
        <div>
          <ExpensesFilter key='expense-filter' expenses={expenses} onFilterChange={onFilterChange} selected={filteredYear} />
          <ExpenseList key='expense-list' expenses={expenses} filteredYear={filteredYear} />
        </div>
      }
    </div>
  );
}

export default App;

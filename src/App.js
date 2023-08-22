import AddExpenseSection from "./components/AddExpenseSection";
import ExpensesFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {

  const [expenses, setExpenses] = useState([])
  const [filteredYear, setFilteredYear] = useState('All')
  const [addExpenseModalOpen, setAddExpenseModalOpen] = useState(false)

  const onCancel = () => setAddExpenseModalOpen(false)

  const saveNewExpense = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
    setAddExpenseModalOpen(false)
  }

  const onFilterChange = year => setFilteredYear(year)

  return (
    <div className="App">
      {
        !addExpenseModalOpen &&
        <button className='add-expense-button-index' onClick={() => setAddExpenseModalOpen(true)}>Add Expense</button>
      }
      {
        addExpenseModalOpen &&
        <AddExpenseSection key='add-expense-section'
          onNewExpense={saveNewExpense}
          onCancel={onCancel}
        />
      }
      {
        expenses.length > 0 &&
        <>
          <ExpensesFilter
            key='expense-filter'
            expenses={expenses}
            onFilterChange={onFilterChange}
            selected={filteredYear} /><ExpenseList
            key='expense-list'
            expenses={expenses}
            filteredYear={filteredYear} />
        </>
      }
      {
        expenses.length === 0 &&
        <p className='no-expenses' >No expenses found. Try adding some!</p>
      }
    </div>
  );
}

export default App;

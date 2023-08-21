import './style.css'
import ExpenseItem from '../ExpenseItem'
import Card from '../Card'

export default function ExpenseList(props) {
  const { expenses } = props

  const filteredExpenses = (props.filteredYear === 'All') ? expenses
    : expenses.filter(expense => expense.date.getFullYear().toString() === props.filteredYear)

  const total = Number(filteredExpenses.reduce((acc, expense) => acc + Number(expense.price), 0)).toFixed(2)

  const average = Number(total / filteredExpenses.length).toFixed(2)

  console.log(filteredExpenses)

  return (
    <div className='expense-list-container'>
      <h2>Expense List ({filteredExpenses.length})</h2>
      <div>
        <p>Total: ${total} | Average: ${average}</p>
        <Card className='expense-list'>
          {
            filteredExpenses
              .sort((a, b) => b.date - a.date)
              .map(expense => <ExpenseItem key={expense.id} expense={expense} />)
          }
        </Card>
      </div>

    </div>
  )
}
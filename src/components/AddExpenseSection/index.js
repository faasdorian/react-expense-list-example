import Card from '../Card'
import AddExpenseForm from '../AddExpenseForm'
import './style.css'

export default function AddExpenseSection(props) {

  const onNewExpense = expense => {
    const newExpense = {
      ...expense,
      id: (Math.random() * 1000 + 1).toFixed(0),
      price: Number(expense.price).toFixed(2),
      date: new Date(expense.date),
    }

    props.onNewExpense(newExpense)
  }

  return (
    <Card className='add-expense-section'>
      <AddExpenseForm onNewExpense={onNewExpense} />
    </Card>
  )
}
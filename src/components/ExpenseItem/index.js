import Card from '../Card'
import ExpenseDate from '../ExpenseDate'
import './style.css'

export default function ExpenseItem(props) {
  const { date, title, price } = props.expense

  return (
    <Card className='expense-item'>
      < ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
    </Card>
  )
}
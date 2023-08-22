import './style.css'
import { useState } from 'react'

export default function AddExpenseForm(props) {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')

  const onTitleChange = event => setTitle(event.target.value)

  const onPriceChange = event => setPrice(event.target.value)

  const onDateChange = event => setDate(event.target.value)

  function onSubmit(event) {
    event.preventDefault()
    if (title.trim().length === 0 || price.trim().length === 0 || date.trim().length === 0) {
      console.log('Invalid input')
      return
    }

    const expense = { title, price, date }

    props.onNewExpense(expense)

    setTitle('')
    setPrice('')
    setDate('')
  }

  return (
    <form className='add-expense-form' onSubmit={onSubmit} >
      <h3>New Expense</h3>
      <div className='add-expense-form__input'>
        <label>Title</label>
        <input type='text' value={title} onChange={onTitleChange} />
      </div>
      <div className='add-expense-form__input'>
        <label>Price</label>
        <input type='number' min='0.01' step='0.01' value={price} onChange={onPriceChange} />
      </div>
      <div className='add-expense-form__input'>
        <label>Date</label>
        <input type='date' value={date} onChange={onDateChange} />
      </div>
      <button className='add-expense-button' type='submit'>Add</button>
    </form>
  )
}
import "./ExpenseForm.css";
import { useState } from 'react'

function ExpenseForm () {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [enteredExpenseForm, setEnteredExpenseForm] = useState({})
    //e (event) is available automatically when we use the onChange attribute, so we just need to pass it as a param -> we can use it in the function.
    //    inside the event.target the attribute "value" holds the value at the time that the event occurs.
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }
    return (
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" max="0.01" onChange={amountChangeHandler} />
            </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
            </div>
            <div className='new-expense__actions'>
                <button className="new-expense__control">Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
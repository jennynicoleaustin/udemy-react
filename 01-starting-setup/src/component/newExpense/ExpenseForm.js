import "./ExpenseForm.css";
import {useState} from 'react'

function ExpenseForm() {
    //  You can repeat it three separate times for state or... useState as an object as its initial value. The better more concise approach is three separate states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })
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
    const submitHandler = (e) => {
        e.preventDefault(); // keeps the current page from reloading

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)
    // Two-way binding = add the value attribute to the input
    }
    return (
        // Add the onsubmit event to the overall form so that the submit button will trigger the event inside "onSubmit"
        //    Don't forget that the default form behavior is to refresh the page (send the form to the server) -- in react we want to prevent default behavior so that we can handle the event ourselves, on the current page via js
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" max="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button className="new-expense__control">Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
// If you are updating state, and it depends on other factors of state do NOT use the spread operator
// instead use an arrow function and pass the previous state as the parameter

//Gather all the different states and send them via a form
//
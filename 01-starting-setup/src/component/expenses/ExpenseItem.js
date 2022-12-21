import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // Must have only one root element (div) within the return statement.
    // If you only need a simple div you can wrap it in an empty carrot situation
    const clickHandler = () => {
        console.log("CLICKED")
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>CLICK ME </button>
        </Card>
    );
}

export default ExpenseItem;
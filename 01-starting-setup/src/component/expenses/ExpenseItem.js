import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // Must have only one root element (div) within the return statement.
    // If you only need a simple div you can wrap it in an empty carrot situation

//This does not execute because  of the way react renders initially. --- It only renders once and any updates that are done after render will not be executed unless... You use state

    // let title = props.title;
    //
    // const clickHandler = () => {
    //     title = "Updated"
    // }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
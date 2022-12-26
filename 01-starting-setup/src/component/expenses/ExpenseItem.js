import React from 'react';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // Must have only one root element (div) within the return statement.
    // If you only need a simple div you can wrap it in an empty carrot situation

//This does not execute because  of the way react renders initially. --- It only renders once and any updates that are done after render will not be executed unless... You use state

    // let title = props.title;
    //


// useState is a React "hook" --- all hooks start with use and must be called within a component -- they cannot be called outside the component and should not be called in any nested functions.

// Expects a default state value - useState is a variable that allows it to be called again (re-rendered) when the state changes. useState returns an array with two elements, the variable and a function for updating the function. --- We use Array destructuring to assign these values to two separate variables.
    const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle("Updated!")
    //     // console.log(title) // This will return the old value of title because setTitle does not actually reset the title but rather it schedules the state update.
    // }

    // Any values that may change within the app should be set using STATE.
    //Why can you update the variable that is set as a constant - because we do not use an equal operator rather the state is updated via a function.

    // "State" allows React to be reactive and allows us to update the ui and listen for events.

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/*<button onClick={clickHandler}>Change Title</button>*/}
        </Card>
    );
}

export default ExpenseItem;

//Stateless component (it does not manage any state) just there for presentational purposes.
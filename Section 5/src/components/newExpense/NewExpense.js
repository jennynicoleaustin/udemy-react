import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const openNewExpenseForm = () => {
       setShowForm(true)
    }

    const closeNewExpenseForm = () => {
        setShowForm(false)
    }
    return (
        <div className='new-expense'>
            {!showForm && <button className='new-expense__actions' onClick={openNewExpenseForm}>Add New Expense</button>}
            {showForm && <ExpenseForm onCancel={closeNewExpenseForm} onSaveExpenseData={saveExpenseDataHandler} />}

        </div>
    );
};

export default NewExpense;
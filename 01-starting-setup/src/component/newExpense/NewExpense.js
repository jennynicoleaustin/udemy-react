import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )

}
export default NewExpense;

// In react you can only communicate from parent to child or child to parent you cannot communicate sibling to sibling.
// Goal is to lift the state just enough so that the component you want to have access to the data can grab that data.
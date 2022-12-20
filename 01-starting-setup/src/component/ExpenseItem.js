import "./ExpenseItem.css"
function ExpenseItem () {

    const expenseDate = new Date(2022, 12, 20);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.45;
    return (
        // Must have only one root element (div) within the return statement.
        // If you only need a simple div you can wrap it in an empty carrot situation
        <>
            <div className="expense-item">{expenseDate.toISOString()}</div>
            <div>
                <h2 className="expense-item">{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </>
    )

}
export default ExpenseItem;

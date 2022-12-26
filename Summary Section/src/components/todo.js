// props = property
//key value pairs {} - inside the curly base is treated as js not plain text
// declarative result - describe the result you want.

function Todo(props) {

    function deleteHandler() {
        console.log('clicked here')
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>DELETE</button>
            </div>
        </div>
    )
    // DO NOT execute the function here, no open closing braces.
}

export default Todo;
// props = property
//key value pairs {} - inside the curly base is treated as js not plain text

function Todo(props) {

    return (
    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <button className='btn'>DELETE</button>
        </div>
    </div>
    )

}

export default Todo;
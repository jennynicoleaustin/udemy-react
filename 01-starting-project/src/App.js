// This is a react component. it can be used as a html element. its just a function that is defined, returns an html element and is exported to the "App"
// React components must return something that can be rendered in the dom.
function App() {
    return <div>
        <h1>My Todos</h1>
        <div>
            <h2>TITLE</h2>
            <div>
                <button>DELETE</button>
            </div>
        </div>
    </div>;
} //App function

export default App;

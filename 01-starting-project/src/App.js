// This is a react component. it can be used as a html element. its just a function that is defined, returns an html element and is exported to the "App"
// React components must return something that can be rendered in the dom.
import Todo from "./components/todo";

function App() {
    return <div>
        <h1>My Todos</h1>
        <Todo text='Learn React' />
    </div>;
} //App function

export default App;
// Left off on Video 462
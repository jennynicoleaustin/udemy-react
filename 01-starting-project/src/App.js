// This is a react component. it can be used as a html element. its just a function that is defined, returns an html element and is exported to the "App"
// React components must return something that can be rendered in the dom.
import Todo from "./components/todo";

function App() {
    return <div>
       <Switch>
           <Route path={'/'}>
               <TestTemplate />
           </Route>
       </Switch>
    </div>;
} //App function

export default App;
// Left off on Video 462
//starting point, first code that is run inside the browser.
import React from 'react';
import ReactDOM from 'react-dom'; // importing the object ReactDom from the library react-dom (inside dependencies) to use inside the app
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';

// Html in js = jsx
// creating the <App /> html element and telling it where to render in the real dom.

//The only html page that is actually sent to the browser is the index.html file inside the public folder.
// ReactDOM.render(<App />, document.getElementById('root'));
// Render the App react element inside the div with the id "root" inside the index.html

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

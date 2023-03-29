import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/Demo";

function App() {

    const [showParagraph, setShowParagraph] = useState(false);

    // real dom elements will flash when changes are made to it.
    // You can use this to see that ONLY the elements that are effected are updated / re-rendered on the real dom.
    console.log('app running')

    const toggleParaHandler = () => {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }

  return (
    <div className="app">
      <h1>Hi there!</h1>
        <DemoOutput show={showParagraph}/>
        <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {

  const [boxArray, setBoxArray] = useState([])
  

  return (
    <div className="App">
      <Form
      boxColor={boxArray}
      setBoxColor={setBoxArray}
      />
      <Display
      boxArray={boxArray}
      />
    </div>
  );
}

export default App;

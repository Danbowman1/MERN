import React, {useState} from 'react';
import './App.css';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {

  const [boxColor, setBoxColor] = useState([])

  return (
    <div className="App">
      <Form
      boxColor={boxColor}
      setBoxColor={setBoxColor}
      />
      <Display
      boxColor={boxColor}
      />
    </div>
  );
}

export default App;

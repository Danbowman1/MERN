import './App.css';
import React, {useState} from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [taskList, setTaskList] = useState([]) 


  return (
    <div className="App">
        <Form 
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <Display 
          taskList={taskList}
          setTaskList={setTaskList}
        />
    </div>
  );
}

export default App;

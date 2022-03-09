import axios from 'axios';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Display from './components/Display';
import Form from './components/Form';


function App() {



  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/display/:type/:id' element={<Display />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

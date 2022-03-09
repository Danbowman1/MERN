import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Display from './components/Display';


function App() {



  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path='/' element={<Display />}/>
        <Route path='/display/:type/:id' element={<Display />}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

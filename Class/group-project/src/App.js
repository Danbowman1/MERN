import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BeerInfo from './components/BeerInfo';
import Home from './views/Home';

function App() {




  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} default/>
        <Route path='/:id' element={<BeerInfo/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

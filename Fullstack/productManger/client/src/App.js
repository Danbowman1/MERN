import './App.css';
import AllProducts from './components/AllProducts';
import CreateProduct from './components/CreateProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OneProduct from './components/OneProduct';


function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Routes>
      <Route path='/' element={<AllProducts/>}/>
      <Route path='/products/:id' element={<OneProduct/>}/>
      

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

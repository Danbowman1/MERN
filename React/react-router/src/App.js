import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import DisplayNumber from './components/DisplayNumber';
import DisplayWord from './components/DisplayWord';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:num' element={<DisplayNumber />}/>
        <Route path='/:word' element={<DisplayWord />}/>
        <Route path='/:word/:color/:background' element={<DisplayWord />}/>

      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;

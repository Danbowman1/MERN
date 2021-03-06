import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contact';

function App() {




  return (
    <BrowserRouter>

    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:big' element={<About />} />
        <Route path='/contact' element={<Contacts />} />

      </Routes>

    </div>

    </BrowserRouter>
  );
}

export default App;

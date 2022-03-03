import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';

import DisplayWord from './components/DisplayWord';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:param' element={<DisplayWord />}/>
        <Route path='/:param/:color/:background' element={<DisplayWord />}/>

      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;

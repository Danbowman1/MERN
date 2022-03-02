import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayOne from './components/DisplayOne';
import Home from './views/Home';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/country/:countryCode' element={<DisplayOne />} />
        <Route path='/country/:countryCode/:rating' element={<DisplayOne />} />
        <Route path='/country/:countryCode/:rating/:review' element={<DisplayOne />} />
        

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

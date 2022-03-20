import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import NewAuthor from './components/NewAuthor';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<AllAuthors />}/>
        <Route path='/new' element={<NewAuthor/>}/> 
        <Route path='/authors/edit/:id' element={<EditAuthor/>}/> 
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

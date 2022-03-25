import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import EditView from './views/EditView';

function App() {
  return (
    <BrowserRouter>

    <div >
      <Routes>
        <Route path="/" element={<IndexView/>}/>
        <Route path="/create" element={<CreateView/>}/>
        <Route path="/:id" element={<DetailView/>}/>
        <Route path="/:id/edit" element={<EditView/>}/>
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;

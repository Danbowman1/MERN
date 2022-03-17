import React, {useEffect, useState} from 'react'
import './App.css';
import AllMovies from './components/AllMovies';
import NewMovie from './components/NewMovie';
import OneMovie from './components/OneMovie';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditMovie from './components/EditMovie';

function App() {

  


  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<AllMovies />}/>
        <Route path='/new' element={<NewMovie />}/>
        <Route path='/movie/:id' element={<OneMovie />}/>
        <Route path='/movie/edit/:id' element={<EditMovie />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

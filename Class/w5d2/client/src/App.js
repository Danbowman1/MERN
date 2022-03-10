import React, {useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  useEffect(()=>{
    axios.get("http://localhost:8000/api/movies")
      .then((res)=>{
        console.log(res)
        console.log(res.data)
      })
  }, [])


  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

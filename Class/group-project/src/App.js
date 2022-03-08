import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

const [beerList, setBeerList] = useState([])

useEffect(()=>{
  axios.get("https://api.punkapi.com/v2/beers")
  .then((res)=>{
    console.log(res)
    console.log(res.data)
    setBeerList(res.data)
  })
  .catch((err)=>console.log(err))
},[])



  return (
    <div className="App">
      {beerList.map((beer,index)=> {
        return (
          <div>
            <p>{beer.name}</p>
            <p>{beer.description}</p>
            <img src={beer.image_url} alt='beer'/>
          </div>
        )
      })}
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [planet, setPlanet] = useState({})

  const [planetNumber, setPlanetNumber] = useState(1)

  const [residentsLink, setResidentsLink ] = useState([])

  const [residents, setResidents] = useState({})

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${planetNumber}`)
    .then((res)=>{
      console.log(res)
      console.log(res.data)
      setPlanet(res.data)
      setResidentsLink(res.data.residents[0])
      })
    .catch((err)=>console.log(err))
  }, [planetNumber])

  useEffect(() => {
    if(residentsLink) {
      axios.get(residentsLink)
      .then((res)=>{
        console.log(res)
        console.log(res.data)
        setResidents(res.data)
      })
      .catch((err)=>console.log(err))
    } else {
      setResidents('')
    }
    
  }, [residentsLink])

  const planetChangerNext = () => {
    if(planetNumber === 60) {
      setPlanetNumber(1)
    } else {
      setPlanetNumber(planetNumber + 1)
    }
  } 

  const planetChangerPrev = () => {
    if(planetNumber === 1) {
      setPlanetNumber(60)
    } else {
      setPlanetNumber(planetNumber - 1)
    }
  }


  return (
    <div className="App">

      <div className='container'>
        <p className='categories'>Planet Name: {planet.name}</p>
        <p className='categories'>Climate: {planet.climate}</p>
        <p className='categories'>Population: {planet.population}</p>
        <p className='categories'>Surface Water: {planet.surface_water}</p>

        <button onClick={planetChangerPrev}className='buttons'>Previous</button>

        <button onClick={()=>setToggle(!toggle)} className='red-button'>Get Famous Resident</button>

        <button onClick={planetChangerNext} className='buttons'>Next</button>

      </div>

      {
        toggle && residents?
        <h1>Planet's Famous Resident: {residents.name}</h1>
        :null
      }

    </div>
  );
}

export default App;

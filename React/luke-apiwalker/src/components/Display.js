import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import { useParams, Link } from "react-router-dom";


const Display = (props) => {

    const {type, id} = useParams()
    const [person, setPerson] = useState({})
    const [planets, setPlanets] = useState({})

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((res)=> {
                console.log(res)
                if(type === 'people') {
                    setPerson(res.data)
                } else {
                    setPlanets(res.data)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    },[type, id])


    return (
        <div>
            <Form />
        {
            type === 'people'?
            <div>
                <h1>Person</h1>
                <p>Name: {person.name}</p>
                <p>Height: {person.height}</p>
            </div>
            :null
        }
        {
            type === 'planets'?
            <div>
                <h1>Planet</h1>
                <p>Name: {planets.name}</p>
                <p>Population: {planets.population}</p>
            </div>
            :null
        }
        </div>
    )
}

export default Display
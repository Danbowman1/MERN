import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import { useParams, Link } from "react-router-dom";



const Display = (props) => {

    const {type, id} = useParams()
    const [person, setPerson] = useState({})
    // const [planets, setPlanets] = useState({})
    const [category, setCategory] = useState('')
    const [categoryKeys, setCategoryKeys] = useState([])
    const [error, setError] = useState(false)
    const [homeWorld, setHomeWorld] = useState('')
    const [displayWorld, setDisplayWorld] = useState({})

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((res)=>{
                setError(false)
                if(type === 'people'){
                    console.log(res.data)
                    setPerson(res.data)
                    setHomeWorld(res.data.homeworld)
                    setCategory(null)
                } else {
                    console.log(res.data)
                    setCategory(res.data)
                    setCategoryKeys(Object.keys(res.data))
                }
            })
            .catch((err)=>{
                setError(true)
                console.log(err)
            })
    }, [type, id])

    useEffect(()=> {
        if(homeWorld){
            axios.get(homeWorld)
                .then((res)=>{
                    console.log(res.data)
                    setDisplayWorld({
                        name: res.data.name,
                        url: res.data.url.match(/\d+/g),
                    })
                })
                .catch((err)=>console.log(err))
        }
        else{
            console.log('No home world')
        }
    }, [homeWorld])

    return (
        <div>  
            <Form />
            {
                error?
                <div>
                <p>These are not the droids you are looking for!</p>
            
                </div>
                :null
            }
            
            {
                type === 'people' && !error?
                <div>
                    <h1>Person</h1>
                    <p>Name: {person.name}</p>
                    <p>Height: {person.height}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Gender: {person.gender}</p>
                    <Link to={`/display/planets/${displayWorld.url}`}>Home World: {displayWorld.name}</Link>
                </div>
                :null
            }
            {
                category && !error?
                <div>
                    <h1>{type}</h1>
                    <p>{categoryKeys[0]}: {category[categoryKeys[0]]}</p>
                    <p>{categoryKeys[1]}: {category[categoryKeys[1]]}</p>
                    <p>{categoryKeys[2]}: {category[categoryKeys[2]]}</p>
                    <p>{categoryKeys[3]}: {category[categoryKeys[3]]}</p>
                    <p>{categoryKeys[4]}: {category[categoryKeys[4]]}</p>
                </div>
                :null
            }
        </div>
    )
}

export default Display
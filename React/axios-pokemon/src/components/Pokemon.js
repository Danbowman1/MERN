import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => {
                console.log(res.data.results)
                setPokemon(res.data.results)
            })
            .catch((err)=> console.log(err))
    },[])

    return (
        <div>
            {pokemon.map((pokemon, index)=>(
                (<ul>
                <li key={index} >{pokemon.name}</li>
                </ul>)
            ))}
        </div>
    )
}

export default Pokemon
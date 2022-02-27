import React, { useEffect, useState } from 'react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => res.json())
            .then(res => {
                setPokemon(res.results)
                console.log(res)
            })
            .catch((err)=> console.log(err))
    },[])

    return (
        <div>
            {pokemon.map((pokemon, index)=>{
                return(<ul key={index}><li >{pokemon.name}</li></ul>)
            })}
        </div>
    )
}

export default Pokemon
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'

const IndexView = (props) => {
const [athletes, setAthletes] = useState([])

useEffect(()=>{
    axios.get("http://localhost:8000/api/athletes")
        .then((res)=>{
            console.log(res.data)
            setAthletes(res.data)
        })
        .catch(err=>console.log(err))
}, [])

    return (
        <div>
            <h1>Athletes</h1>
            <Link to="/create">Add Athlete</Link>
            <ul>
            {athletes.map((athlete, index)=>(
                <li key={index}><Link to={`/${athlete._id}`}>{athlete.firstName} {athlete.lastName}</Link>  |  <Link to={`/${athlete._id}/edit`}>Edit</Link> | <DeleteButton/></li>

            ))}
            </ul>
        </div>
    )
}

export default IndexView
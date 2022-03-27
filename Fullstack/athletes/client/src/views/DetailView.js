import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'

const DetailView = () => {

    const { id } = useParams()
    const [athlete, setAthlete] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/athletes/${id}`)
            .then((res)=>{
                console.log(res.data)
                setAthlete(res.data)
            })
            .catch(err=>console.log(err))
    }, [])

    return (
        <div>
        <h1>{athlete.firstName} {athlete.lastName}</h1>
        <p>Sport: {athlete.sport}</p>
        <p>Team: {athlete.team}</p>
        <DeleteButton id={athlete.id}/>
        </div>
    )
}

export default DetailView
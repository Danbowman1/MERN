import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import Form from '../components/Form'


const EditView = () => {

    const {id} = useParams()
    const [athlete, setAthlete] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/athletes/${id}`)
            .then(res=>{
                console.log(res.data)
                setAthlete(res.data)
                setLoaded(true)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    const onSubmitHandler = (e, data) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/athletes/${id}`, data)
            .then(res=>{
                console.log(res.data)
                navigate("/")
            })
            .catch(err=>{
                console.log(err)
            })
    }
    

    return (
        <div>
            <h1>Editing {athlete.firstName} {athlete.lastName} </h1>
            {loaded &&
            <Form
                onSubmitHandler={onSubmitHandler}
                initialFirstName={athlete.firstName}
                initialLastName={athlete.lastName}
                initialSport={athlete.sport}
                initialTeam={athlete.team}
            />
            }
            <DeleteButton/>
        </div>
    )
}

export default EditView
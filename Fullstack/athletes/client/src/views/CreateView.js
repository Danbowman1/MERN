import axios from 'axios'
import React, { useState } from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'

const CreateView = () => {
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const onSubmitHandler = (e, data) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/athletes`, data)
            .then(res=>{
                console.log(res.data)
                navigate("/")
            })
            .catch(err=>{
                console.log(err)
                const errorRespone = err.response.data.errors
                const errArr = []
                for(const key of Object.keys(errorRespone)){
                    errArr.push(errorRespone[key].message)
                }
                setErrors(errArr)
            })
    }
    return (
        <div>
        <h1>Create a new athlete</h1>
        {errors.map((error, index)=>{
            return (
                <p key={index}>{error}</p>
            )
        })}
        <Form
            onSubmitHandler={onSubmitHandler}
            initialFirstName=''
            initialLastName=''
            initialSport=''
            initialTeam=''
        />
        </div>
    )
}

export default CreateView
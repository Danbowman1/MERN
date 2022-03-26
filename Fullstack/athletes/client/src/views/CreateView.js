import axios from 'axios'
import React from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'

const CreateView = () => {

    const navigate = useNavigate()

    const onSubmitHandler = (e, data) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/athletes", data)
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
        <h1>Create a new athlete</h1>
        <Form
            onSubmitHandler={onSubmitHandler}
        />
        </div>
    )
}

export default CreateView
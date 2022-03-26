import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import Form from '../components/Form'


const EditView = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const onSubmitHandler = (e, data) => {
        axios.put("http://localhost:8000/api/athletes", data)
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
            <h1>We are editing athlete {id}</h1>
            <Form
                onSubmitHandler={onSubmitHandler}
            />
            <DeleteButton/>
        </div>
    )
}

export default EditView
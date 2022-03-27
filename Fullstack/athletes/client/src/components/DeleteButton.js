import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DeleteButton = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const onClickHandler = (e) =>{
        axios.delete(`http://localhost:8000/api/athletes/${id}`)
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        <div>
        <button onChange={onClickHandler}>Delete</button>
        </div>
    )
}

export default DeleteButton
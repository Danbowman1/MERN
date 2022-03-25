import React from 'react'
import { useParams } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import Form from '../components/Form'

const EditView = () => {

    const {id} = useParams()

    return (
        <div>
            <h1>We are editing athlete {id}</h1>
            <Form/>
            <DeleteButton/>
        </div>
    )
}

export default EditView
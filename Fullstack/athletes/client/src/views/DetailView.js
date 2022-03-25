import React from 'react'
import { useParams } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'

const DetailView = () => {

    const { id } = useParams()

    return (
        <div>
        <h1>This is a view about athlete: {id}</h1>
        <DeleteButton/>
        </div>
    )
}

export default DetailView
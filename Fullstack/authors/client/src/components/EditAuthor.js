import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const EditAuthor = () => {

    const [name, setName] = useState('')
    const [errors, setError] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res.data)
                setName(res.data.name)
            })
            .catch((err)=>console.log(err))
            // navigate("/error")
    }, [id])



    const submitHandler = (e) =>{
        e.preventDefault()

        axios.put(`http://localhost:8000/api/authors/${id}`, 
        {
            name
        })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
                setError(err.response.data.errors)
            })

    }

    return (
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to={"/"}>Go Home</Link>
            </header>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input 
                type="text" 
                value={name} 
                onChange={(e)=>setName(e.target.value)} />
                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }
                <div>
                    <button className='formBtn' onClick={()=> navigate('/')}>Cancel</button>
                    <button className='formBtn'>Submit</button>
                </div> 
            </form>
        </div>
    )
}

export default EditAuthor
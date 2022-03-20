import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NewAuthor = () => {

    const [name, setName] = useState('')
    const [errors, setError] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()

        axios.post("http://localhost:8000/api/authors", {
            name
        })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response.data.errors:", err.response.data.errors)
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
                name="name" 
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

export default NewAuthor
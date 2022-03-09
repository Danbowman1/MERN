import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Form = (props) => {

    const [type, setType] = useState('people')
    const [id, setId] = useState(0)

    const navigate = useNavigate()
    

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/display/${type}/${id}`)

        setType('people')
        setId(0)
    }
    


    return (
        <div>
            <form onSubmit={submitHandler}>

                <label>Search for:</label>

                <select value={type} name='type' onChange={(e)=>{
                    console.log(e)
                    console.log(e.target)
                    setType(e.target.value)
                }} >
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                    <option value='films'>Films</option>
                    <option value='species'>Species</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='starships'>Starships</option>

                </select>

                {
                    type === 'vehicles' ?
                    <p>4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 44 are valid IDs for vehicles</p>
                    :null
                }

                <label>ID:</label>
                <input value={id} type='number' onChange={(e)=>{
                    console.log(e.target)
                    setId(e.target.value)
                }} />

                <button>Search</button>
            </form>



        </div>
    )
}

export default Form
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isCompositeComponent } from "react-dom/test-utils";


const Form = (props) => {

    const [type, setType] = useState('people')
    const [id, setId] = useState(1)

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate(`/display/${type}/${id}`)
                setType('people')
                setId(1)
            })
            .catch((err)=>console.log(err))

    }


    return (
        <div>
            <form onSubmit={submitHandler}>
            
            <label htmlFor="">Search for:</label>
            <select value={type} name='type' onChange={(e)=>setType(e.target.value)}>
                <option value='people'>People</option>
                <option value='planets'>Planets</option>
            </select>

            <label htmlFor="">ID:</label>
            <input value={id}type='number' onChange={(e)=>setId(e.target.value)} />

            <button>Search</button>
            </form>



        </div>
    )
}

export default Form
import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



const DisplayOne = (props) => {

    const {countryCode} = useParams()

    const [country, setCountry] = useState({})

    useEffect(()=> {
        axios.get(`https://restcountries.com/v2/alpha/${countryCode}`)
            .then(res=> {
                console.log(res)
                console.log(res.data)
                setCountry(res.data)
            })
            .catch(err=>console.log(err))
    }, [])


    return (
        <div>
            <p>{country.name}</p>
        </div>
    )
}

export default DisplayOne
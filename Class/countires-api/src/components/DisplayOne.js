import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



const DisplayOne = (props) => {

    const {countryCode, rating, review} = useParams()

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
            <p>Name: {country.name}</p>
            <p>Population: {country.population}</p>
            <img style={{objectFit: 'cover', height: '100px', marginBottom: '16px'}} src={country.flag} alt="Country's Flag"/>


        {
            rating? 
            <p>Thank you for rating my country {rating}!</p>
            :null
        }

        {
            review?
            <p>Your review: {review}</p>
            :null
        }
        </div>
    )
}

export default DisplayOne
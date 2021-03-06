import axios from "axios"
import React, {useState} from "react"

const Form = (props) => {

    const {countryList, setCountryList} = props

    const [regionSelector, setRegionSelector] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        axios.get(`https://restcountries.com/v2/regionalbloc/${regionSelector}`)
            .then(res=>{
                console.log(res)
                console.log(res.data)
                setCountryList(res.data)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
        <h1>Country App</h1>
                <select
                className="form-control w-25 mx-auto text-center my-3 border border-3"
                onChange={(e)=>setRegionSelector(e.target.value)}
                >
                    <option value='' defaultValue>Select a Country</option>
                    <option value='EU' name='regionSelector'>European Union</option>
                    <option value='AU' name='regionSelector'>African Union</option>
                    <option value='NAFTA' name='regionSelector'>North American Free Trade</option>
                    <option value='SAARC' name='regionSelector'>South Asian Association for Coop</option>
                    <option value='EEU' name='regionSelector'>Eurasian Economic Union</option>
                    <option value='PA' name='regionSelector'>Pacific Alliance</option>
                    <option value='CARICOM' name='regionSelector'>Caribbean Community</option>
                    <option value='AL' name='regionSelector'>Arab League</option>
                </select>
                <button className="btn btn-primary m-1">Show Countries</button>
            </form>
        </div>
    )
}

export default Form
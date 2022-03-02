import { useState } from 'react'
import {Link} from 'react-router-dom'

const DisplayAll = (props) => {

    const {countryList, setCountryList} = props

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')

    const ratingHandler = (e, country) => {
        country.rating = e.target.value
        setRating(e.target.value)
    }

    const reviewHandler = (e, countryFromBelow) => {
        let countryListCopy = countryList.map((country)=> {
            if(country === countryFromBelow) {
                let countryCopy = {...countryFromBelow}
                countryCopy.review = e.target.value
                console.log(countryCopy)
                setReview(e.target.value)
                return countryCopy
            } else {
                return country
            }
        })
        setCountryList(countryListCopy)
    }

    const paramsHandler = (country) => {
        if(country.rating && country.review){
            return(
                <Link 
                className='card-title border py-3 bg-secondary text-light fw-bold'
                to={`/country/${country.alpha2Code}/${country.rating}/${country.review}`}>
                {country.name}
                </Link>
            )
        } else if(country.rating) {
            return(
                <Link
                    className='card-title border py-3 bg-secondary text-light fw-bold'
                    to={`/country/${country.alpha2Code}/${country.rating}`}>
                    {country.name}
                </Link>
            )
        } else {
            return (
                <Link
                    className='card-title border py-3 bg-secondary text-light fw-bold'
                    to={`/country/${country.alpha2Code}`}>{country.name}
                </Link>
            )
        }
    }

    return (
        <div className='d-flex p-2 bd-highlight flex-wrap border w-75 mx-auto justify-content-around'>
            {
                countryList.map((country, index) => (
                    <div key={index}
                    className='card m-2 w-10 rounded'
                    >

                    {
                        paramsHandler(country)
                    }

                        {/* <Link
                        className='card-title border py-3 bg-secondary text-light fw-bold'
                        to={`/country/${country.alpha2Code}`}>{country.name}</Link> */}

                        <input type='number'
                        className='form-control mx-auto text-center my-3 border border-3 p-2'
                        placeholder='Rating'
                        onChange={(e)=>ratingHandler(e, country)}
                        />

                        {
                            country.rating?
                            <div>
                                <label htmlFor='review'>Please leave a review (Optional):</label>
                                <textarea className='form-control mx-auto text-center my-3 border-3 fixed-bottom w-50' placeholder={`${country.name} Review`} 
                                type='text'
                                onChange={(e)=>reviewHandler(e, country)}
                                />
                            </div>
                            :null
                        }

                        <p>{country.population}</p>
                        <p>{country.capital}</p>
                        <p>{country.alpha2Code}</p>
                        <img style={{objectFit: 'cover', height: '120px'}} src={country.flag} alt="Country's Flag"/>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BeerGallery = () => {
    const [beerList, setBeerList] = useState([])

useEffect(()=>{
    axios.get("https://api.punkapi.com/v2/beers?per_page=80")
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setBeerList(res.data)
    })
        .catch((err)=>console.log(err))
},[])
    



    return (
        
        <div>
        <form>
            <input type="search" name="beerSearch" id="beerSearch" />
        </form>
            {beerList.map((beer,index)=> {
        return (
            <div className='galleryContainer' key={beer.id}>
            <Link to={`/${beer.id}`}>
                <img src={beer.image_url} alt='beer' className='beerImage'/>
                <p>{beer.name}</p>
            </Link>
            </div>
        )
    })}
        </div>
    )
}

export default BeerGallery
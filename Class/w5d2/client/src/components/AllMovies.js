import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



const AllMovies = (props) => {

    const [movieList, setMovieList] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/movies')
            .then((res)=>{
            console.log(res)
            console.log(res.data)
            setMovieList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <div>
        <header>
            <h1 style={{fontSize:"50px", borderBottom: "5px double lightgray", margin: "0 450px"}}>Movie Mania</h1>
            <Link to={"/new"}>Add New Movie</Link>
        </header>

        {
            movieList.map((movie, index)=>(
                <div key={movie._id}>
                    <p>{movie.title}</p>
                    <img src={movie.boxArt} alt="Movie box art" style={{hight:"150px", width:"150px"}}/>
                    
                </div>
            ))
        }
        </div>
    )
}

export default AllMovies

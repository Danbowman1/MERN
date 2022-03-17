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

    const deleteMovie = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/movie/${idFromBelow}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setMovieList(movieList.filter(movie => movie._id !== idFromBelow))

            })
            .catch((err)=>console.log(err))
    }


    return (
        <div>
        <header>
            <h1 style={{fontSize:"50px", borderBottom: "5px double lightgray", margin: "0 450px"}}>Movie Mania</h1>
            <Link to={"/new"}>Add New Movie</Link>
        </header>

        {
            movieList.map((movie, index)=>(
                <div key={movie._id} style={{textAlign: "center"}}>
                    <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
                    <br />
                    <img src={movie.boxArt} alt="Movie box art" style={{hight:"150px", width:"150px"}}/>
                    <br />
                    <button onClick={()=>deleteMovie(movie._id)}>Delete</button>
                    <Link to={`/movie/edit/${movie._id}`}>Edit</Link>
                </div>
            ))
        }
        </div>
    )
}

export default AllMovies

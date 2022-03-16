import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"


const OneMovie = (props) => {


    const [movie, setMovie] = useState({});


    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setMovie(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })

    }, [id])



    return (
        <div>
            <header>
                <h1 style={{
                    fontSize: "50px", borderBottom: "5px double lightgray",
                    marginLeft: "450px", marginRight: "450px"
                }}>{movie.title}</h1>
                <Link to={"/"}>Return Home</Link>
            </header>

            <p>{movie.genre}</p>
            <img src={movie.boxArt} alt="box art"/>
            <p>{movie.watchLength}</p>
            <p>{movie.rating}</p>
            <p>{movie.actors}</p>
            <div>Kid Friendly
                {
                    movie.kidFriendly?
                    <p>Okay for kids!!!</p>
                    :<p>No kiddies allowed!!!!!!</p>
                }
            </div>
            <p>{movie.yearReleased}</p>

        </div>
    )
}




export default OneMovie;
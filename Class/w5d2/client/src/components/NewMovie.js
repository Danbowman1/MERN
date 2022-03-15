import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const NewMovie = () => {

const {title, setTitle} = useState("")
const {genre, setGenre} = useState("")
const {boxArt, setBoxArt} = useState("")
const {watchLength, setWatchLength} = useState(0)
const {rating, setRating} = useState("")
const {actors, setActors} = useState("")
const {kidFriendly, setKidFriendly} = useState(false)
const {yearReleased, setYearReleased} = useState(0)



    return (
        <div>
            <header>
            <h1 style={{fontSize:"50px", borderBottom: "5px double lightgray", margin: "0 450px"}}>Add a Movie</h1>
            <Link to={"/"}>Return Home</Link>
        </header>

        <form>
            <label></label>
        </form>

        </div>
    )
}

export default NewMovie
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const AllAuthors = () => {

    const [authorList, setAuthorList] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res.data)
                setAuthorList(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setAuthorList(authorList.filter(author=> author._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))
    }

    return (
    <div>
    <header>
        <h1>Favorite Authors</h1>
        <Link to={"/new"}>Add an Author</Link>
    </header>
    <h4>We have quotes by:</h4>
            <table>
                <thead style={{backgroundColor:"lightgray", color:"white"}}>
                    
                    <tr>
                        <th>Author</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
    {
        authorList.map((author, index)=>(
            <tr key={author._id} className="allAuthors" >
                
                <td >{author.name}</td>
                <td>
                <Link to={`/authors/edit/${author._id}`}>Edit</Link>
                <button onClick={()=>deleteAuthor(author._id)}>Delete</button>
                </td>
            </tr>
        ))
    }
                </tbody>
            </table>
    </div>
    )
}

export default AllAuthors
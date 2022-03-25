import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'

const IndexView = (props) => {


    return (
        <div>
            <h1>Athletes</h1>
            <Link to="/create">Add Athlete</Link>
            <ul>
                <li><Link to="/5">John Smith</Link>  |  <Link to="/5/edit">Edit</Link> | <DeleteButton/></li>
            </ul>
        </div>
    )
}

export default IndexView
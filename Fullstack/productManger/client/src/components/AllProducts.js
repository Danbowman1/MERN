import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import DeleteButton from "./DeleteButton"


const AllProducts = (props) => {

    const {productList, removeFromDom} = props
    const navigate = useNavigate();
    

    return (
        <div>
        
        <hr/>
            <h1>All Products:</h1>
            
            {
                productList.map((product, index)=>(
                    <div key={index}>
                    <Link to={`/product/${product._id}`}>
                        <h2>{product.title}</h2>
                    </Link>

                    <button onClick={() => navigate(`/product/edit/${product._id}`)}>
                        Edit
                    </button>
                    <DeleteButton deleteCallBack={()=>removeFromDom(product._id)} />
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts
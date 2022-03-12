import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import CreateProduct from "./CreateProduct"


const AllProducts = (props) => {

    const {productList, setProductList} = props
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProductList(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <div>
        
        <hr/>
            <h1>All Products:</h1>
            
            {
                productList.map((product, index)=>(
                    <div key={index}>
                    <Link to={`/products/${product._id}`}>
                        <p>{product.title}</p>
                    </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts
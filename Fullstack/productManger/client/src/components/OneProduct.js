import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom"


const OneProduct = (props) => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Product:</h1>
            {
                <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            }
        </div>
    )
}

export default OneProduct
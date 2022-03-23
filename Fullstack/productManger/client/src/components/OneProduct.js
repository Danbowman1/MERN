import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams, useNavigate } from "react-router-dom"
import DeleteButton from "./DeleteButton"


const OneProduct = (props) => {

    const {id} = useParams()
    const [product, setProduct] = useState({})

    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res.data)
                navigate('/')
            })
            .catch((err)=>console.log(err))
    }


    return (
        <div>
            <h1>Product</h1>
            {
                <div>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <DeleteButton deleteCallBack={deleteFilter}/>
                    <Link to={'/'} >Go Home</Link>
                </div>
            }
        </div>
    )
}

export default OneProduct
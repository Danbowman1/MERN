import { useState, useEffect } from "react";
import Form from "../components/Form";
import AllProducts from "../components/AllProducts";
import axios from "axios";


const Main = (props) => {

    const [productList, setProductList] = useState([])

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

    const removeFromDom = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res)=>{
                console.log(res.data)
                setProductList(productList.filter((product, index)=>product._id !== productId))
            })
            .catch((err)=>console.log(err))
    }

    const createProduct = (productParam) => {
        
        axios
            .post("http://localhost:8000/api/products", productParam)
            .then((res) => {
                console.log(res);
                console.log(res.data)
                
                setProductList([...productList, res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div>
            <Form
                onSubmitProp={createProduct}
                initialTitle=""
                initialPrice=""
                initialDescription=""
            />
            <AllProducts
                productList={productList}
                removeFromDom={removeFromDom}
                
                
            />
        </div>
    )
}

export default Main
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Form from './Form'


const UpdateProduct = (props) => 
{
        const { id } = useParams();
        const [product, setProduct] = useState({});
        const [headerTitle, setHeaderTitle] = useState("");
        const [loaded, setLoaded] = useState(false);
        
        const navigate = useNavigate();
    
    
        useEffect(() => {
            axios
                .get(`http://localhost:8000/api/products/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data);
                    
                    setHeaderTitle(res.data.title);
                    setLoaded(true);
                })
                .catch((err) => console.log(err));
        }, []);
    
        const updateProduct = (updatedProduct) => {
            axios.put(`http://localhost:8000/api/products/${id}`, updatedProduct)
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    navigate("/"); 
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    
        return (
            <div>
                <header>Edit {headerTitle}</header>
    
                
                {
                    loaded &&
                    <Form
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                }
        </div>
    )
}

export default UpdateProduct
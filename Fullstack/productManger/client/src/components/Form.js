import React, {useState} from 'react'
import axios from 'axios'


const Form = (props) => {
    
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)


    const submitHandler = (e)=>{
        e.preventDefault()
        onSubmitProp({title, price, description})
        setTitle("")
        setPrice("")
        setDescription("")
    }


    return (
        <div>
            <header>Product Manager</header>

            <form onSubmit={submitHandler}>

                <div className='form-fields'>
                    <label>Title</label>
                    <input
                        onChange={(e)=> setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <div className='form-fields'>
                    <label>Price</label>
                    <input
                        onChange={(e)=> setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <div className='form-fields'>
                    <label>Description</label>
                    <input
                        onChange={(e)=> setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <input type="submit" className="submit-input" value="Create" />

            </form>
        </div>
    )
}

export default Form
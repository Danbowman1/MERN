import React, {useState} from "react"

const Form = (props) => {

    const {boxArray, setBoxArray} = props
    
    const [color, setColor] = useState("")

    const [size, setSize] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setBoxArray([...boxArray, 
            {
                color: color,
                size: size + "px"
            }
        ])

        setColor("")
        setSize("")
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
            <div>
            <label>Color </label>
                <input
                type='text'
                name="color"
                value={ color }
                onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <div>
                <label>Size </label>
                <input 
                type='text'
                name="size"
                value={ size }
                onChange={(e) => setSize(e.target.value)}    
                />
                <input type="submit" value="Add" />
            </div>
            </form>
        </div>
    )
}

export default Form
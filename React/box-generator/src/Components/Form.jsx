import React, {useState} from "react"

const Form = (props) => {

    const {boxColor, setBoxColor} = props
    
    const [color, setColor] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setBoxColor([...boxColor, color])

        setColor("")
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
            <label>Color </label>
                <input
                type='text'
                name="color"
                value={ color }
                onChange={(e) => setColor(e.target.value)}
                />
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Form
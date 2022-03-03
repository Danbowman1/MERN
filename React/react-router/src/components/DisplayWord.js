import { useParams } from "react-router-dom"

const DisplayWord = () => {

    const { param, color, background } = useParams()

    return (
        <div>
                {
                    isNaN(param)?
                    <p style={{color: color, backgroundColor: background}}>This is a word: {param}</p>
                    :<p>This is a number: {param}</p>
                }
                
        </div>
    )
}

export default DisplayWord
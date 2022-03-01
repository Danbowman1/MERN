import { useParams } from "react-router-dom"

const DisplayWord = () => {

    const { word, color ,background } = useParams()

    return (
        <div>
            <h1 style={{color: color, backgroundColor: background}}>
                The word is : {word}
            </h1>
        </div>
    )
}

export default DisplayWord
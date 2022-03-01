import { useParams } from "react-router-dom"

const DisplayNumber = () => {

    const { num } = useParams()

    return (
        <div>
            <h1>
                The number is : {num}
            </h1>
        </div>
    )
}

export default DisplayNumber
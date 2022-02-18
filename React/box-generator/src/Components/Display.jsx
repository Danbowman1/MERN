
const Display = (props) => {

    const { boxColor } = props

    return (
        <div>
            {
                boxColor.map((color,index) => (
                    <div key={index} style={{
                        margin: "20px",
                        padding: "10px",
                        height: "50px",
                        width: "50px",
                        display: "inline-block",
                        background: color
                    }}>
                    </div> 
                ))
            }
        </div>
    )
}

export default Display
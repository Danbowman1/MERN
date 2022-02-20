
const Display = (props) => {

    const { boxArray } = props

    return (
        <div>
            {
                boxArray.map((box,index) => (
                    <div key={index} style={{
                        margin: "20px",
                        padding: "10px",
                        height: box.size,
                        width: box.size,
                        display: "inline-block",
                        background: box.color
                    }}>
                    </div> 
                ))
            }
        </div>
    )
}

export default Display
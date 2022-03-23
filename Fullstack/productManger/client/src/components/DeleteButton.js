import React from 'react'

const DeleteButton = (props) => {

    const {deleteCallBack} = props

    return (
        <div>
            <button onClick={deleteCallBack}>Delete</button>
        </div>
    )
}

export default DeleteButton
import React, {useState} from "react";

function Form(props) {

    const {taskList, setTaskList} = props

    const [task, setTask] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()

        setTaskList([...taskList, 
            {
                task: task,
                markedDelete: false,
                id: Math.floor((Math.random() * 100000))
            }
        ])
            


        setTask('')
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    onChange={(e) => {
                        setTask(e.target.value)
                    }}
                    value={task}
                    type="text"
                />
                <button className="addBtn">Add</button>
            </form>
        </div>
    );
}

export default Form;

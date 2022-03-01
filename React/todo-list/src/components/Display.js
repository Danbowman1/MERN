import React, {useEffect} from "react"

function Display(props) {

    const {taskList, setTaskList} = props

    useEffect(()=> {
        const data = localStorage.getItem('todos')
        if(data) {
            setTaskList(JSON.parse(data))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(taskList))
    })

    
    const handleCheckOff = (item) => {
        item.markedDelete = !item.markedDelete
        setTaskList([...taskList])
    }

    // const handleCheckOff = (itemFromBelow) => {
    //     let updateItems = taskList.map((item) => {
    //         if(item === itemFromBelow){
    //             let newItem = {...item}
    //             newItem.deleteBox = !item.deleteBox
    //             return newItem
    //         } else {
    //             return item
    //         }
    //     })
    //     setTaskList(updateItems)
    // }

    const styled = (markedDelete) => {
        if (markedDelete === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    };




        const deleteTaskById = (idFromBelow) => {
            setTaskList(taskList.filter((item, index) =>
            item.id !== idFromBelow
            ))
        }

    

    return (
        <div >
        {
            taskList.map((item, index) =>(
            <div id="todo-list" key={item.id}>
            {" "}
                    <p  className={styled(item.markedDelete)}>{item.task}</p>
                    <input onChange={() => handleCheckOff(item)} type="checkbox"/>
                    <button className="delete" onClick={() => deleteTaskById(item.id)}>Delete</button>
            </div>
        ))
        }
        </div>
    );
}

export default Display;

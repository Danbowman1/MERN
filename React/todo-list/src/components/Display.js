function Display(props) {

    const {taskList, setTaskList} = props

    const handleCheckOff = (item) => {

        item.deleteBox = !item.deleteBox
        setTaskList([...taskList])
    }


    const styled = (deleteBox) => {
        if (deleteBox === true) {
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
            <div id="todo-list" className={styled(item.deleteBox)} key={item.id}>
            {" "}
                <p>{item.task}</p>
                <input 
                onChange={() => handleCheckOff(item)}
                type="checkbox" 
                />
                <button 
                className="delete"
                onClick={() => deleteTaskById(item.id)}>Delete</button>
            </div>
        ))
        }
        </div>
    );
}

export default Display;

import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
   
    return (
        // tasks.push() can be used as setTasks([...])
        <div onDoubleClick={()=>onToggle(task.id)}>
        
            <h3 >My new Task</h3>
            <h2>{task.text}<FaTimes style={{
                color: 'red', cursor: 'pointer'
            }} onClick = { ()=> onDelete(task.id)}
            />
            </h2>
            <h2>{task.day}</h2>
        </div>
    )
}

export default Task
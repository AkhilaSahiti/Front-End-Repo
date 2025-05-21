
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {

    // const tasks = [tasks, setTasks] = useState([
        // json response (db.json)
    // ])
   
    return (
        // tasks.push() can be used as setTasks([...tasks, {id:1, name:sahiti}])
        <>
        {/* {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))} */}
            {tasks.map((task) => (
                <Task key = {task.id} task={task}
                onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
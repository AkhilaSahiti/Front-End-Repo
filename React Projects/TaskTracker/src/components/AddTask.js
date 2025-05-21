import { useState } from "react"

const AddTask=({onAdd})=> {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Add the task duffer')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    } 
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add the task" value = {text}
                onChange={(e)=> setText(e.target.value)}/>
            </div>
            
            <div className="form-control">
                <label>Day & Tme</label>
                <input type="text" placeholder="Add day and time" value = {reminder}
                onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} placeholder="Add reminder" value = {reminder}
                onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value='Save  task'/>
        </form>
    )
}

export default AddTask
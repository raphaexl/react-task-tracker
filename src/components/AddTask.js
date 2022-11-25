import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (ev) => {
        ev.preventDefault()
        if (!text){
            alert('Please add a task')
            return 
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor="addTask">Task</label>
            <input type="text" name="addTask" placeholder='Add Task' value={text} onChange={(ev) => setText(ev.target.value)} />
        </div>
        <div className='form-control'>
            <label htmlFor="dateTime">Day & Time</label>
            <input type="text" name="dateTime" placeholder='Add Day & Time' value={day} onChange={(ev) => setDay(ev.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label htmlFor="reminder">Set Reminder</label>
            <input type='checkbox' name="reminder" checked={reminder}  value={reminder} onChange={(ev) => setReminder(ev.currentTarget.checked)}/>
        </div>
        <input className='btn btn-block' type="submit" value='Save Task'/>
    </form>
  )
}

export default AddTask
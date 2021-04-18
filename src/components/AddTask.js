import React, { useState } from 'react'

function AddTask({addTask}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        // Check if text is present
        if(!text){
            alert("Task is required")
            return
        }
        // Add the task
        addTask({text, day, reminder})
        // Clear form field
        setDay('')
        setReminder(false)
        setText('')
    }
    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" name="" id="" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" name="" id="" placeholder="Add Date & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" name="" id="" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Submit" className="btn btn-block"/>
            
        </form>
    )
}

export default AddTask

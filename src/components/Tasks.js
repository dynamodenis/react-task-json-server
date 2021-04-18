import React from 'react'
import { Task } from './Task'


// Set the tasks

function Tasks({tasks, onDelete, onToggle}) {
    
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle}/>
            ))}
        </>
    )
}

export default Tasks

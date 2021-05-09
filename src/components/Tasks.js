import React from 'react'
import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text: 'doctors appointment',
            day: 'Feb 5',
            reminder: true,
        },
        {
            id:2,
            text: 'police appointment',
            day: 'Feb 6',
            reminder: true,
        },
        {
            id:3,
            text: 'parlour appointment',
            day: 'Feb 8',
            reminder: false,
        }
    ])
    return (
        <>
            {tasks.map((task)=>(
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks

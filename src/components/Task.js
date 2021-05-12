import React from 'react'  
import { FaMixer } from "react-icons/fa";
const  Task = ({task, onDelete, onToggle}) => {
    return (
        <div className='task' onDoubleClick={()=>onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaMixer 
                    style={{color:'red',
                    cursor:'pointer'}}
                    onClick={() =>onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default  Task

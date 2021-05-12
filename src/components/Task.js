import React from 'react'  
import { FaMixer } from "react-icons/fa";
const  Task = ({task}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaMixer /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default  Task

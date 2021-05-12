import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App =()=> {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5',
        reminder: true,
    },
    {
        id:2,
        text: 'Police Appointment',
        day: 'Feb 6',
        reminder: true,
    },
    {
        id:3,
        text: 'Parlour Appointment',
        day: 'Feb 8',
        reminder: false,
    }
])

//delete task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=> task.id!==id));
}

//toggle reminder
const toggleReminder = (id)=>{
  console.log('toggle',id)
}

 return (
    <div className="container">
      <Header />    
      {tasks.length > 0 ?(<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
      ):('no tasks')}
    </div>
  );
}

export default App;

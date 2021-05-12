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
 return (
    <div className="container">
      <Header />    
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;

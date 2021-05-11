import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App =()=> {
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
    <div className="container">
      <Header />    
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;

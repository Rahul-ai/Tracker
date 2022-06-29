import { useState } from 'react';
import './App.css';
import Taskss from './component/Tasks'
import Header from './component/Header';
import AddTask from './component/AddTask';


const App = () =>
{
  const [Tasks, setTasks] = useState([
    { 
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5',
        reminder: true,
    },
    {
        id: 2,
        text: 'Teachers Appointment',
        day: 'Feb 6',
        reminder: false,
    },
    {
        id: 3,
        text: 'FireMan Appointment',
        day: 'Feb 7',
        reminder: true,
    }
]);

// Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...Tasks,newTask])
}

//const delete Task
const DeleteTask = (id) => {
  setTasks(Tasks.filter((task)=>task.id !== id));
}

//Toggle Reminder
const ToggleReminder = (id) =>{
   setTasks(Tasks.map((task)=>task.id === id ? 
   {...task,reminder:!task.reminder}: task))
}

    return(
      <div className='container'> 
        <Header/>
        <AddTask OnAdd = {addTask} />
        {
        Tasks.length > 0 ? (
        <Taskss Tasks={Tasks} OnDelete = {DeleteTask} OnToggle ={ToggleReminder} />
        ):(
        <h3>No Tasks TO Show </h3>)
        }
        </div>
    )
}

export default App;

import { useState } from 'react';
import './App.css';
import Taskss from './component/Tasks'
import Header from './component/Header';


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

//const delete Task
const DeleteTask = (id) => {
  setTasks(Tasks.filter((task)=>task.id !== id));
}

    return(
      <div className='container'>
        <Header/>
        {
        Tasks.length > 0 ? (
        <Taskss Tasks={Tasks} OnDelete = {DeleteTask} />
        ):(
        <h3>No Tasks TO Show </h3>)
        }
        </div>
    )
}

export default App;

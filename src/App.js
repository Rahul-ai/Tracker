import { useState } from 'react';
import './App.css';
import Taskss from './component/Tasks'
import Header from './component/Header';


const App = () =>
{
  const [Tasks, setState] = useState([
    { 
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5',
        reminder: true,
    },
    {
        id: 1,
        text: 'Teachers Appointment',
        day: 'Feb 6',
        reminder: false,
    },
    {
        id: 1,
        text: 'FireMan Appointment',
        day: 'Feb 7',
        reminder: true,
    }
]);

    return(
      <div className='container'>
        <Header/>
        <Taskss Tasks={Tasks} />
      </div>
    )
}

export default App;

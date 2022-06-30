import { useState , useEffect } from 'react';
import './App.css';
import Taskss from './component/Tasks'
import Header from './component/Header';
import AddTask from './component/AddTask';
import Footer from './component/footer';
import About from './component/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () =>
{
  const [showAddTask, setshowAddTask] = useState()
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await featchTasks()
      setTasks(taskFromServer)
    }
    getTask()
  }, [])

  //Featch Tasks
  const featchTasks = async () => {
    const res = await fetch('http://localhost:5000/task')
    const data = await res.json()
    return data

  }

  //Featch Tasks
   const featchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/task/${id}`)
    const data = await res.json()
    return data
  }

//show Add Task
const onAddclick = () =>
{
  setshowAddTask(!showAddTask)
}

// Add Task
const addTask = async (task) =>{
  const res = await fetch('http://localhost:5000/task',{
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  }) 
   const data = await res.json()
  setTasks([...Tasks,data])
  
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = { id, ...task}
  // setTasks([...Tasks,newTask])
}

//const delete Task
const DeleteTask = async (id) => {
  await fetch(`http://localhost:5000/task/${id}`,{
    method: 'DELETE'
  })
  setTasks(Tasks.filter((task)=>task.id !== id));
}

//Toggle Reminder
const ToggleReminder = async (id) =>{
    const tasktoChange = await featchTask(id)
    const UpdatedData = {...tasktoChange,reminder: !tasktoChange.reminder}
    const res = await fetch(`http://localhost:5000/task/${id}`,{
    method: 'PUT',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(UpdatedData)
  })

  const data = await res.json();
   setTasks(Tasks.map((task)=>task.id === id ? 
   {...task,reminder:data.reminder}: task))
}

    return(
      <Router>
      <div className='container'> 
        <Header onAddclick={onAddclick} show={showAddTask}/>
        
        <Routes>
        <Route path='/' exact element={
            <>
            {showAddTask && <AddTask OnAdd = {addTask} />}
            {
              Tasks.length > 0 ? (
              <Taskss Tasks={Tasks} OnDelete = {DeleteTask} OnToggle ={ToggleReminder}/>
              ):(
              <h3>No Tasks TO Show </h3>)
              }
            </>
          } 
          />
       <Route path='/about' element = {<About />} />
       </Routes>
        <Footer />
        </div>
        </Router>
    )
}

export default App;

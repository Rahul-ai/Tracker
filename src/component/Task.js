import { FaTimes } from 'react-icons/fa'
const Task = (props) => {
  return (
    <div className='task'>
      <h3>{props.task.text}<FaTimes style={{color:'blue'}}/></h3>
      <p>{props.task.day}</p>
    </div>
  );
}

export default Task;


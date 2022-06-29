import { FaTimes } from 'react-icons/fa'
const Task = (props) => {
  return (
    <div className={`task ${props.task.reminder ? 'reminder':''}`} onDoubleClick={() => props.OnToggle(props.task.id)}>
      <h3>{props.task.text}<FaTimes style={{color:'blue'}} 
      onClick={()=>props.OnDelete(props.task.id)}/></h3>

      <p>{props.task.day}</p>

      <p>Reminder<input type="checkbox" class="form-check-input" 
      onClick={()=>props.OnToggle(props.task.id)} value="checkedValue" 
      checked = {props.task.reminder} /></p>
      </div>      
  );
}

export default Task;


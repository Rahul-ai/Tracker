import Task from './Task'

const Tasks = (props) => {
  return (
    <div>
      {props.Tasks.map((task)=> (<Task Key={task.id} task={task} />))}
    </div>
  );
}

export default Tasks;

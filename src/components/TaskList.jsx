import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className='text-center text-2xl' >No hay tareas </h1>;
  }

  return (
    <div  className='grid justify-center max-w-full grid-rows-4 text-center gap-2' >
      {tasks.map((task) => (
        <TaskCard key={task.id} task = {task} />
      ))}
    </div>
  );
}

export default TaskList;

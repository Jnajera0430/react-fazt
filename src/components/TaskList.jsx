import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className='text-center text-2xl' >No hay tareas </h1>;
  }

  return (
    <div  className='grid justify-center max-w-full text-center gap-2'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task = {task} />
      ))}
      <div className='flex flex-row w-full justify-between pt-16'>
        <p className='float-left pt-4 w-3/4'>You have varState pending tasks</p>
        <button type="submit" className='bg-red-400 hover:bg-red-300 w-1/4 b h-10 rounded'>Clear All</button>
      </div>
      
    </div>
  );
}

export default TaskList;

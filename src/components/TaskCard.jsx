import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function TaskCard({task}) {
  const {deleteTask, editTask}= useContext(TaskContext);
  return (
    
    <div  className='bg-slate-100 w-full p-2 rounded-md flex ' >

      <h1 className='text-xl font-bold w-80 capitalize' >{task.title}</h1>
      <div className='w-10 flex'>
        <button className='text-red-500  pl-2 py-1 rounded-md  hover:text-red-300' onClick={() => editTask(task.id)} >
          <FiEdit/>
        </button>
        <button className='text-red-500  pl-1 py-1 rounded-md  hover:text-red-300' onClick={() => deleteTask(task.id)}>
          <RiDeleteBin6Line/>
        </button>
      </div>
    </div>
  
    
  );
}

export default TaskCard;
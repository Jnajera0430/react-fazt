import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

import { GoPlus } from 'react-icons/go';
function TaskForm() {
    const [title, setTitle] = useState("");
    const {createTask} = useContext(TaskContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTask({
            title
        });
        setTitle('');
    }
  return (
    
    <div className="80-w-80 flex flex-col" >
        
        <form action="" onSubmit={handleSubmit}  className="mx-auto w-1/5 " >
            <h1  className='text-3xl font-bold capitalize py-4' >Todo App</h1>
            <input type="text" placeholder="Add your new todo" name="" id="" 
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                value= {title}
                required
                autoFocus
                className="bg-slate-50 p-3 w-9/12 mb-2" 
            />
            
            <button className="bg-green-400 text-xl mx-4 px-3 py-3 round-md mt-4 hover:bg-green-300"  type="submit"><GoPlus/></button>
        </form>
    </div>
  )
}

export default TaskForm
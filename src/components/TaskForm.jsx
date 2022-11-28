import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

import { GoPlus } from 'react-icons/go';
import { createTask } from '../Hooks/CreateTask';
function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription]=useState('');
    const [validateForm, setValidateForm]= useState({
        title:undefined,
    })
   /*  const {createTask} = useContext(TaskContext); */
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTask({title:title,description:description});
        setTitle('');
        setDescription('')
    }
  return (
    
    <div className="80-w-80 flex flex-col" >
        <form action="" onSubmit={handleSubmit}  className="mx-auto w-1/5 " >
            <h1  className='text-3xl font-bold capitalize py-4' >Todo App</h1>
            <input type="text" placeholder="Add your new todo" name="" id="" 
                onChange={(e)=>{
                    setValidateForm({
                        ...validateForm,
                        title: e.target.value.length > 4 ? '': 'Title is required'
                    })
                    setTitle(e.target.value);
                }}
                value= {title}
                required
                autoFocus
                className="bg-slate-200 p-3 w-9/12 mb-2" 
            />
            {validateForm.title && <span>{validateForm.title}</span>}
            <textarea  rows="2" className='bg-slate-200' placeholder='Add your description' onChange={(e)=>{
                
                setDescription(e.target.value)
            }}></textarea>
            <button className="bg-green-400 text-xl mx-4 px-3 py-3 round-md mt-4 hover:bg-green-300"  type="submit"><GoPlus/></button>
        </form>
    </div>
  )
}

export default TaskForm
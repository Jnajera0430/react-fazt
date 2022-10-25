import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle('');
        setDescription('');
    }
  return (
    
    <div className="max-w-md mx-auto">
        
        <form action="" onSubmit={handleSubmit} className="bg-slate-800 p-10 m-4">
            <h1 className='text-2xl font-bold capitalize text-white py-4'>Crear Tasks</h1>
            <input type="text" placeholder="Ingrese una tarea" name="" id="" 
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                value= {title}
                required
                autoFocus
                className="bg-slate-300 p-3 w-full mb-2"
            />
            <textarea name="" id="" cols="30" rows="10" placeholder='Añadir decription' onChange={(e)=>setDescription(e.target.value)} value={description} className="bg-slate-300 p-3 w-full mb-2"></textarea>
            <button className="bg-green-400 px-2 py-1 round-md mt-4 hover:bg-green-300" type="submit">Save</button>
        </form>
    </div>
  )
}

export default TaskForm
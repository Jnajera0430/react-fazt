import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import "../index.css";
import { editTask } from "../Hooks/EditTask";
import { deleteTask } from "../Hooks/DeleteTask";
function TaskCard({ task }) {
  const { upDateEstado } = useContext(TaskContext);
  const [form, setForm] = useState(false);
  const [clase, setClase] = useState("label");
  const [value, setValue] = useState('');
  
  
  
  /* const checkBox = (id) => {
    if (estado) {
      upDateEstado(id)
      setClase("label");
      
    } else if (!estado) {
      upDateEstado(id); 
      setClase("label-underline");    
    }
  }; */

  return (
    <div>
      <div className="bg-slate-100 w-full p-2 rounded-md flex flex-col"  id={task.label}>
        <div className="w-1/4">
          <input
            type="checkbox"
            name="check"
            checked={task.estado} 
            onClick={()=>{upDateEstado(task.id)}}
            readOnly
          />
        </div>
        <div className="3/4">
          <h1 className="text-xl font-bold w-full ">{task.title}</h1>
        </div>
        <div>
          <p className="text-sm font-light w-80">{task.description}</p>
        </div>
        <div className="w-10 flex">
          <button
            className="text-blue-500  pl-2 py-1 rounded-md  hover:text-blue-300"
            onClick={() => {
              if (!form) {
                setForm(true);
              } else {
                setForm(false);
              }
            }}
          >
            <FiEdit />
          </button>
          <button
            className="text-red-500  pl-1 py-1 rounded-md  hover:text-red-300"
            onClick={() => deleteTask(task.id)}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>

      <div id="form">
        {form ? (
          <form action="" >
            <input type="text" defaultValue={task.title} onChange={(e)=>{
              setValue(e.target.value);
            }}/>
            <button type="submit" onClick={(e)=>{
            e.preventDefault();
            editTask(task.id, value,task.title)
            setForm(false)
            }}><VscEdit/></button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TaskCard;

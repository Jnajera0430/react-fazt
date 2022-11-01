import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiEditorconfig } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import "../index.css";
function TaskCard({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [estado, setEstado] = useState(false);
  const [form, setForm] = useState(false);
  const [clase, setClase] = useState("label");
  const [value, setValue] = useState('');

  
  
  const checkBox = (e) => {
    if (estado) {
      setClase("label");
      setEstado(false);
    } else if (!estado) {
      setClase("label-underline");
      setEstado(true);
    }
  };

  return (
    <div>
      <div className="bg-slate-100 w-full p-2 rounded-md flex " id={clase}>
        <input
          type="checkbox"
          name="check"
          checked={estado}
          onChange={checkBox}
        />
        <h1 className="text-xl font-bold w-80 capitalize">{task.title}</h1>
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
            }}><SiEditorconfig/></button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TaskCard;

import TaskCard from "./TaskCard";
import { useContext,useState } from "react";
import { TaskContext } from "../context/TaskContext";
import '../index.css'
function TaskList() {
  const { tasks,conteo,deleteAll } = useContext(TaskContext);
  const dates = JSON.parse(localStorage.getItem('tasks')); 
  console.log(dates);
  if (dates.length === 0) {
    return <h1 className="text-center text-2xl">No hay tareas </h1>;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    deleteAll();
  }
  
  return (
    <div className="grid justify-center w-full text-center gap-2" >
      <div id="container">
        {
          
          dates.map((task) => (
          
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <div className="flex flex-row w-full justify-between pt-16" >
        <p className="float-left pt-4 w-3/4">You have {conteo} pending tasks</p>
        <form action="" onSubmit={handleSubmit} className="w-1/4  h-16 flex justify-center">
          <button
            type="submit"
            className="bg-red-400 hover:bg-red-300 w-full  h-10 rounded"
          >
            Clear All
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskList;

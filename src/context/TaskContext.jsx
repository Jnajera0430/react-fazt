import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../data/tasks'
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);
  const [conteo , setConteo] = useState(0);
  
  const deleteAll = ()=>{

    let datos = JSON.parse(localStorage.getItem("tasks"));
    setTask(datos.filter((task)=>task.estado !== true));
    
  } 
  
  
  const upDateEstado=(taskId)=>{
    let dates = JSON.parse(localStorage.getItem("tasks"));
    dates.map((task)=>{
      if (task.id === taskId) {
        if (task.estado === false) {
          task.estado = true;
          task.label = "label-underline";
        }else{
          if (task.estado === true) {
            task.estado = false;  
            task.label = "";
          }
          
        }
      }
    })
    localStorage.setItem("tasks", JSON.stringify(dates));
    setTask(dates);
  }

  const conteoTask =()=>{
    let dates = JSON.parse(localStorage.getItem("tasks"));
    let total = 0;
    dates.forEach((task)=>{
      if (task.estado === false) {
        total++;
      }
    })
    setConteo(total);
  }
  useEffect((e) => {
    let dates = localStorage.getItem("tasks");
    if (dates) {
      setTask(JSON.parse(dates));
      conteoTask();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    conteoTask();
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ 
        tasks,
        upDateEstado,
        deleteAll,
        conteo,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

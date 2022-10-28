import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);
  
  const createTask = (task) => {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        estado: false,
      },
    ]);
  };
  
  useEffect(() => {
    setTask(data);
  }, []);

  const deleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };
  const editTask = (taskId) => {
    tasks.filter((task, index) =>{
      if (task.id === taskId) {
        console.log(taskId);
       console.log(task.title) 
      }
      
    } );
  };

  
  
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        editTask,       
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

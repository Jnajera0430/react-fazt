import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState(data);
  const createTask = (task) => {
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };
  const editTask = (taskId, value, valueA ) => {
    if (value.length === 0) {
      tasks.map((task)=>{
        if (task.id === taskId) {
          task.title = valueA;        
        }
      })
    }else{
      tasks.map((task)=>{
        if (task.id === taskId) {
          task.title = value;        
        }
      })
    }
    
  };
  useEffect(() => {
    setTask(data);
  }, []);
  useEffect(()=>{

  })
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

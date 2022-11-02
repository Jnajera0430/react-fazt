import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../data/tasks'
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);
  const createTask = (task) => {
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        estado: false,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };
  const editTask = (taskId, value, valueA) => {
    let datos = JSON.parse(localStorage.getItem("tasks"));
    if (value.length === 0) {
      datos.map((task) => {
        if (task.id === taskId) {
          task.title = valueA;
        }
      });
    } else {
      datos.map((task) => {
        if (task.id === taskId) {
          task.title = value;
        }
      });
    }
    localStorage.setItem("tasks", JSON.stringify(datos));
    setTask(datos);
  };
  const clearStorag=()=>{
    

  }
  useEffect((e) => {
    let dates = localStorage.getItem("tasks");
    if (dates) {
      setTask(JSON.parse(dates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        editTask,
        clearStorag,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

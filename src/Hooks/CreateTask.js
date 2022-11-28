export const createTask = (task) => {
    
    let datos = JSON.parse(localStorage.getItem("tasks"));
    const newTask = [
      ...datos,
      {
        id: datos.length,
        title: task.title,
        description: task.description,
        estado: false,
        label: "",
      },
    ];
    localStorage.setItem('tasks',JSON.stringify(newTask))
    window.location.reload(); 
  };
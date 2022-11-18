export const createTask = (task) => {
    console.log(task);
    let datos = JSON.parse(localStorage.getItem("tasks"));
    const newTask = [
      ...datos,
      {
        id: datos.length,
        title: task,
        estado: false,
        label: "",
      },
    ];
    localStorage.setItem('tasks',JSON.stringify(newTask))
    window.location.reload();
  };
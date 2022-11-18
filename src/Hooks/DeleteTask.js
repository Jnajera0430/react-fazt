export const deleteTask = (taskId) => {
    let datos = JSON.parse(localStorage.getItem("tasks"));
    const tasks=datos.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks))
    window.location.reload();
};  
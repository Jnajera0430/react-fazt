export const editTask = (taskId, value, valueA) => {
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
    window.location.reload()
  };
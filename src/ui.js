import { getTasks } from "./task";

// Función para mostrarle al usuario las tareas
export const renderTasks = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    const tasks = getTasks();

    tasks.forEach((tasks) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", tasks.id);

        // Añadir clase solo si la tarea está completada
        if(tasks.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
        ${tasks.text}
        <div class="buttons">
        <button class="delete"> Eliminar </button>
        <button class="toggle"> ${ tasks.completed === false ? "Completar" : "Deshacer" } </button>
        <div>
        `;

        taskList.appendChild(li);
    });
};
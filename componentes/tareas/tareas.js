import { item } from "./itemTarea.js";

function consultarTareas() {
    fetch('http://localhost:3000/tareas')
      .then(response => response.json())
      .then(data => cargarTareas(data))
      .catch(error => console.error('Error:', error));
      
  }

function cargarTareas(data) {
    let DOM = document.querySelector("#root")
    DOM.appendChild(renderTarea(data))
}

function renderTarea(tareas) {
    let contenedor = document.createElement('div');
    contenedor.className = "tareas";
    contenedor.id = "listaTareas";

    tareas.forEach(tarea => {
        console.log("📌 Renderizando tarea:", tarea); // Depuración

        // Verificar si la tarea es válida
        if (typeof tarea !== "object" || !tarea.id) {
            console.error("❌ Error: Tarea inválida en renderTarea()", tarea);
            return;
        }

        // Crear el elemento de la tarea con la función item
        let tareaElemento = item(tarea);

        // Asignar el id único al div contenedor de la tarea
        tareaElemento.id = `tarea-${tarea.id}`; // Asignando un id único para cada tarea

        // Agregar el elemento de tarea al contenedor
        contenedor.appendChild(tareaElemento);
    });

    return contenedor;
}

export { consultarTareas, renderTarea };

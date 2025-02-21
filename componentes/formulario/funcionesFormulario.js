import { listaDeTareas } from "../tareas/data.js";
import { item } from "../tareas/itemTarea.js";

function agregarNuevaTarea(tarea) {
    if (tarea.trim() !== "") {
        listaDeTareas.push(tarea);
        
        // Crear el nuevo elemento de tarea
        let nuevaTareaElemento = item(tarea);

        // Agregarlo al contenedor de tareas en el HTML
        let contenedorTareas = document.getElementById("contenedorTareas");
        if (contenedorTareas) {
            contenedorTareas.appendChild(nuevaTareaElemento);
        } else {
            console.error("No se encontró el contenedor de tareas en el HTML.");
        }
    } else {
        console.log("No se puede agregar una tarea vacía.");
    }
}

export { agregarNuevaTarea };


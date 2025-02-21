import { todasLasTareas } from "./data.js";
import { item } from "./itemTarea.js";

function crearTarea() {
    let div = document.createElement('div');
    div.className = "tarea";
    div.id = "contenedorTareas";

    let tareas = todasLasTareas();

    tareas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export {crearTarea}
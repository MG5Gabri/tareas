import { consultarTareas, listaDeTareas } from "./data.js";
import { item } from "./itemTarea.js";

function crearTarea() {
    
    let listaTareas = consultarTareas();
    console.log(listaTareas)

    let div = document.createElement('div');
    div.className = "tarea";
    div.id = "contenedorTareas";

    let tareas = listaDeTareas;

    tareas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export {crearTarea}
import { todasLasTareas } from "./data.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "divTarea";

    
    let checkbox = document.createElement('div')
    checkbox.className = "checkBox"
    div.appendChild(checkbox)
    let check = document.createElement('div');
    check.className = "check";
    checkbox.appendChild(check);


    let nametarea = document.createElement('div');
    nametarea.className = "nameTarea";
    nametarea.innerText = contenido;
    div.appendChild(nametarea)


    return div;
}

function crearTarea() {
    let div = document.createElement('div');
    div.className = "tarea";

    let tareas = todasLasTareas();

    tareas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export {crearTarea}
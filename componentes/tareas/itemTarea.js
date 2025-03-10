import { marcarTarea } from "./funcionesTarea.js";

function item(tarea) {
    let div = document.createElement('div');
    div.className = "divTarea";

    let checkbox = document.createElement('div');
    checkbox.className = "checkBox";
    div.appendChild(checkbox);

    let check = document.createElement('div');
    check.className = "check";
    checkbox.appendChild(check);

    let nametarea = document.createElement('div');
    nametarea.className = "nameTarea";
    nametarea.innerText = tarea;
    div.appendChild(nametarea);

    marcarTarea(div);

    return div;
}

export {item}
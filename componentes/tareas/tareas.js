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

function renderTarea(data) {
    
    let div = document.createElement('div')
    div.className = "tareas"

    data.forEach((e)=>{
        console.log(e)
        div.appendChild(item(e.nombre_tarea));
    });

    return div
}

export {consultarTareas }
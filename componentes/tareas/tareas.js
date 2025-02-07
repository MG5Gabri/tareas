function crearTarea(nombre) {
    let tarea = document.createElement('div');
    tarea.className = "tarea";

    let dTarea = document.createElement('div');
    dTarea.className = "divTarea";

    let checktarea = document.createElement('div');
    checktarea.className = "checkBox";
    let check = document.createElement('div');
    check.className = "check";
    checktarea.appendChild(check);

    let nametarea = document.createElement('div');
    nametarea.className = "nameTarea";
    nametarea.innerText = nombre;

    dTarea.appendChild(checktarea);
    dTarea.appendChild(nametarea);
    tarea.appendChild(dTarea);

    return tarea;
}

function agregarTareas(listaDeTareas) {
    let contenedor = document.getElementById("contenedorTareas");
    for (let i = 0; i < listaDeTareas.length; i++) {
        contenedor.appendChild(crearTarea(listaDeTareas[i]));
    }
}

window.onload = function() {
    if (typeof listaDeTareas !== 'undefined') {
        agregarTareas(listaDeTareas);
    } else {
        console.error("La lista de tareas no está definida. Asegúrate de que 'data.js' está correctamente vinculado.");
    }
};

export {crearTarea}
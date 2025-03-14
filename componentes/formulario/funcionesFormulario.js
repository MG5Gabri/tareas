import { item } from "../tareas/itemTarea.js";

function agregarNuevaTarea(nombreTarea) {
    let nuevaTarea = {
        nombre_tarea: nombreTarea,
        estado: "falso"
    };

    fetch("http://localhost:3000/tareas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaTarea)
    })
    .then(response => response.json())
    .then(tareaGuardada => {
        console.log("✅ Tarea agregada:", tareaGuardada);

        if (!tareaGuardada.id) {
            console.error("❌ Error: La tarea guardada no tiene un ID.");
            return;
        }

        let tareaElemento = item(tareaGuardada);
        const listaTareas = document.querySelector("#listaTareas");

        if (listaTareas) {
            listaTareas.appendChild(tareaElemento);
        }

        // Aquí renderizamos todas las tareas (incluyendo la recién agregada)
        renderNewTarea();  // Llama a esta función si es necesario re-renderizar las tareas completas
    })
    .catch(error => console.error("❌ Error al agregar tarea:", error));
}

function renderNewTarea() {
    fetch("http://localhost:3000/tareas")
    .then(response => response.json())
    .then(tareas => {
        const listaTareas = document.querySelector("#listaTareas");
        listaTareas.innerHTML = '';  // Limpiar las tareas anteriores
        tareas.forEach(tarea => {
            let tareaElemento = item(tarea);
            listaTareas.appendChild(tareaElemento);
        });
    })
    .catch(error => console.error("❌ Error al cargar tareas:", error));
}

export { agregarNuevaTarea, renderNewTarea };

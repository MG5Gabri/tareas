import { marcarTarea } from "./funcionesTarea.js";
import { eliminarTarea } from "./funcionesTarea.js"; 

function item(tarea) {
    console.log("Tarea recibida:", tarea); // ✅ Verifica qué datos llegan

    // 🔴 Si tarea no es un objeto, mostrar un error y retornar
    if (typeof tarea !== "object" || !tarea.id) {
        console.error("⚠️ Error: La tarea no es un objeto válido o no tiene ID:", tarea);
        return document.createElement('div'); // Retornar un div vacío para evitar errores
    }

    let div = document.createElement('div');
    div.className = "divTarea";

    // 🔹 Primera sección: Checkbox
    let checkbox = document.createElement('div');
    checkbox.className = "checkBox";
    div.appendChild(checkbox);

    let check = document.createElement('div');
    check.className = "check";
    checkbox.appendChild(check);

    // 🔹 Segunda sección: Nombre de la tarea
    let nametarea = document.createElement('div');
    nametarea.className = "nameTarea";
    nametarea.innerText = tarea.nombre_tarea || "Tarea sin nombre"; // Asegúrate de que esto tiene el nombre de la tarea
    div.appendChild(nametarea);

    // 🔹 Tercera sección: Botón eliminar
    let checkbox2 = document.createElement('div');
    checkbox2.className = "checkBox2";
    div.appendChild(checkbox2);

    let btnEliminar = document.createElement('button');
    btnEliminar.innerText = "❌";
    btnEliminar.className = "btnEliminar";
    btnEliminar.onclick = () => eliminarTarea(tarea.id, div);
    checkbox2.appendChild(btnEliminar);

    marcarTarea(div);

    return div;
}

export { item };




import { agregarNuevaTarea } from "./funcionesFormulario.js";

function crearFormulario() {
    let formulario = document.createElement('div');
    formulario.className = "formulario";

    let cuadroFormulario = document.createElement('div');
    cuadroFormulario.className = "divFormulario";

    let task = document.createElement('div');
    task.className = "divTask";
    task.contentEditable = "true"; // Permitir edición de texto

    let add = document.createElement('div');
    add.className = "addButtom";
    add.innerText = "Add";

    add.addEventListener("click", function () {
        let nuevaTarea = task.innerText.trim();
        if (nuevaTarea !== "") {
            agregarNuevaTarea(nuevaTarea);
            task.innerText = ""; // 🧹 Limpiar el campo después de agregar
        } else {
            console.log("⚠️ Introduce una tarea antes de agregar.");
        }
    });

    cuadroFormulario.appendChild(task);
    cuadroFormulario.appendChild(add);
    formulario.appendChild(cuadroFormulario);

    return formulario;
}

export { crearFormulario };
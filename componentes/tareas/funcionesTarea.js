function marcarTarea(div) {
    let check = div.querySelector('.check');
    let nametarea = div.querySelector('.nameTarea');

    div.addEventListener("click", () => {
        check.classList.toggle("marcado");
        nametarea.classList.toggle("tachado");
    });
}

function eliminarTarea(id, elemento) {
    fetch(`http://localhost:3000/tareas/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 🔥 Eliminar la tarea del DOM
            elemento.remove();
            console.log("Tarea eliminada con éxito.");
        } else {
            console.error("Error al eliminar tarea:", data.message);
        }
    })
    .catch(error => console.error("Error al conectar con el servidor:", error));
}



export { marcarTarea, eliminarTarea };


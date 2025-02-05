import { crearFormulario } from "./componentes/formulario/formulario.js"
import { crearHeader } from "./componentes/header/header.js"
import { crearTarea } from "./componentes/tareas/tareas.js"

let DOM = document.querySelector("#root")

DOM.appendChild(crearHeader())
DOM.appendChild(crearFormulario())
DOM.appendChild(crearTarea())


console.log("Ejecutando main.js")
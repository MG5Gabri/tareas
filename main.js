import { crearFormulario, crearFormularioLogin } from "./componentes/formulario/formulario.js"
import { loginUsuario } from "./componentes/formulario/funcionesFormulario.js";
import { crearHeader } from "./componentes/header/header.js"
import { consultarTareas } from "./componentes/tareas/tareas.js"

let DOM = document.querySelector("#root")

function cargarDOM(DOM) {

    DOM.appendChild(crearHeader());
    consultarTareas();
    DOM.appendChild(crearFormulario());
    DOM.appendChild(crearFormularioLogin())
    

    return DOM
}

cargarDOM(DOM)



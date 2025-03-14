import { agregarNuevaTarea } from "./funcionesFormulario.js";
import { loginUsuario } from "./funcionesFormulario.js";

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

// Función para crear el formulario de login
function crearFormularioLogin() {
    let formulario = document.createElement('div');
    formulario.className = "formulario2";

    let cuadroFormulario = document.createElement('div');
    cuadroFormulario.className = "divFormulario2";

    // Campo para usuario
    let usuario = document.createElement('input');
    usuario.type = "text";
    usuario.placeholder = "Usuario";
    usuario.id = "usuario2"
    usuario.className = "input";

    // Campo para contraseña
    let contraseña = document.createElement('input');
    contraseña.type = "password";
    contraseña.placeholder = "Contraseña";
    contraseña.id = "contraseña2"
    contraseña.className = "input";

    // Botón de login
    let loginButton = document.createElement('button');
    loginButton.innerText = "Iniciar sesión";
    loginButton.className = "loginButton";
    loginButton.addEventListener("click", function() {
        // Llamar a la función de login
        loginUsuario(usuario.value, contraseña.value);
    });

    // Botón de registro
    let registroButton = document.createElement('button');
    registroButton.innerText = "Registrar usuario";
    registroButton.className = "registroButton";
    registroButton.addEventListener("click", function() {
        // Mostrar formulario de registro
        mostrarFormularioRegistro();
    });

    cuadroFormulario.appendChild(usuario);
    cuadroFormulario.appendChild(contraseña);
    cuadroFormulario.appendChild(loginButton);
    cuadroFormulario.appendChild(registroButton);
    formulario.appendChild(cuadroFormulario);

    document.addEventListener('DOMContentLoaded', function () {
        const usuario2 = document.querySelector('#usuario2');
        const contraseña2 = document.querySelector('#contraseña2');
        
        const loginButton = document.querySelector('.loginButton');
        
        if (loginButton) {
            console.log("loginButton encontrado:", loginButton);
            loginButton.addEventListener('click', () => {
                console.log("Valor del usuario:", usuario2.value);
                console.log("Valor de la contraseña:", contraseña2.value);
                loginUsuario(usuario2.value, contraseña2.value);  // Llamada a loginUsuario
            });
        } else {
            console.log("No se encontró el botón loginButton en el DOM.");
        }
    });

    loginButton.addEventListener('click', () => {
        console.log("Botón de login presionado");
        console.log("Valor del usuario:", usuario2.value);
        console.log("Valor de la contraseña:", contraseña2.value);
        loginUsuario(usuario2.value, contraseña2.value);  // Llamada a loginUsuario
    });
    

    return formulario;
}

// Función para mostrar el formulario de registro
function mostrarFormularioRegistro() {
    let formulario = document.createElement('div');
    formulario.className = "formulario";

    let cuadroFormulario = document.createElement('div');
    cuadroFormulario.className = "divFormulario";

    // Campo para usuario
    let usuario = document.createElement('input');
    usuario.type = "text";
    usuario.placeholder = "Usuario";
    usuario.className = "input";

    // Campo para correo
    let correo = document.createElement('input');
    correo.type = "email";
    correo.placeholder = "Correo";
    correo.className = "input";

    // Campo para contraseña
    let contraseña = document.createElement('input');
    contraseña.type = "password";
    contraseña.placeholder = "Contraseña";
    contraseña.className = "input";

    // Botón de registro
    let registroButton = document.createElement('button');
    registroButton.innerText = "Registrar";
    registroButton.className = "registroButton";
    registroButton.addEventListener("click", function() {
        registrarUsuario(usuario.value, contraseña.value, correo.value);
    });

    cuadroFormulario.appendChild(usuario);
    cuadroFormulario.appendChild(correo);
    cuadroFormulario.appendChild(contraseña);
    cuadroFormulario.appendChild(registroButton);
    formulario.appendChild(cuadroFormulario);

    document.body.innerHTML = '';  // Limpiar contenido anterior
    document.body.appendChild(formulario);
}

export { crearFormulario, crearFormularioLogin, mostrarFormularioRegistro };


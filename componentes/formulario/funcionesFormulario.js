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

//-----------------------------------------------------------------------------

function loginUsuario(usuario, contraseña) {

    console.log("Intentando iniciar sesión con:", usuario, contraseña);
    
    // Crea un objeto con las credenciales
    const data = {
        usuario: usuario,
        contraseña: contraseña
    };
    
    // Realiza la solicitud POST
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error de autenticación');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login exitoso:', data);
        // Aquí puedes redirigir o mostrar mensaje de éxito
    })
    .catch(error => {
        console.error('Error de login:', error);
    });
}

function registrarUsuario(usuario, contraseña, correo) {
    if (!usuario || !contraseña || !correo) {
        console.log("⚠️ Faltan datos para el registro.");
        return;
    }

    // Llamar al endpoint de registro en el backend
    fetch("http://localhost:3000/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario: usuario, contraseña: contraseña, correo: correo })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("✅ Usuario registrado correctamente:", data.message);
            // Mostrar mensaje de usuario creado y redirigir al login
            mostrarMensajeUsuarioCreado();
        } else {
            console.error("❌ Error al registrar usuario:", data.message);
        }
    })
    .catch(error => {
        console.error("❌ Error al registrar usuario:", error);
    });
}

function mostrarMensajeUsuarioCreado() {
    let mensaje = document.createElement('div');
    mensaje.className = "mensajeUsuarioCreado";
    mensaje.innerText = "¡Usuario creado exitosamente! Redirigiendo al login...";

    document.body.innerHTML = ''; // Limpiar el contenido anterior
    document.body.appendChild(mensaje);

    // Redirigir al formulario de login después de unos segundos
    setTimeout(() => {
        document.body.innerHTML = ''; // Limpiar el mensaje
        let formularioLogin = crearFormularioLogin();
        document.body.appendChild(formularioLogin);
    }, 3000);
}

function agregarTarea(nombreTarea, estado, usuarioId) {
    const tarea = {
        nombre_tarea: nombreTarea,
        estado: estado,
        usuario_id: usuarioId
    };

    fetch('http://localhost:3000/tareas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Tarea agregada:', data);
    })
    .catch(error => {
        console.error('Error al agregar la tarea:', error);
    });
}

export { agregarNuevaTarea, renderNewTarea ,loginUsuario, registrarUsuario };

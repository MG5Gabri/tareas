function crearFormulario() {
    let formulario = document.createElement('div')
    formulario.className = "formulario"

    let cuadroFormulario = document.createElement ('div')
    cuadroFormulario.className = "divFormulario"
        let task = document.createElement ('div')
        task.className = "divTask"
        task.innerText = "Write a task"
        let add = document.createElement ('div')
        add.className = "addButtom"
        add.innerText = "Add"

    cuadroFormulario.appendChild(task)
    cuadroFormulario.appendChild(add)    


    formulario.appendChild(cuadroFormulario)

    return formulario
}

export {crearFormulario}
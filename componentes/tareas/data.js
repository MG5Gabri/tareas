function consultarTareas() {
    fetch('http://localhost:3000/tareas')
      .then(response => {
        console.log(response); // Aquí puedes ver la response completa
        return response.text();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  


let listaDeTareas = [
    "Hacer la cama",
    "Lavar los platos",
    "Sacar la basura",
    "Regar las plantas",
    "Hacer la tarea de matemáticas",
    "Leer un libro",
    "Hacer ejercicio",
    "Preparar la cena",
    "Ordenar la habitación",
    "Pagar las cuentas"
];


export { listaDeTareas, consultarTareas };

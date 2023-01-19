// console.log('Inicio de tareas');
// console.log('Haciendo tarea 1');
// console.log('Haciendo tarea 2');
// console.log('Fin de tareas');

const temporizador = (callback) => {
    setTimeout(() => {
        callback()
    }, 5000)
};

let operacion = () => console.log('Realizando operación');

console.log('Inicio de tareas');
temporizador(operacion);
console.log('Fin de tareas');
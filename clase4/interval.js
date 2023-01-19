// console.log('Inicio de tareas');
// console.log('Haciendo tarea 1');
// for(let contador = 1; contador <= 5; contador++) {
//     console.log(contador);
// }
// console.log('Fin de tareas');

let contador = () => {
    let valorContador = 1;
    console.log('realizando operacion');

    let timer = setInterval(() => {
        console.log(valorContador++);
        if (valorContador>5) {
            clearInterval(timer);
        }
    }, 1000);
}

console.log('Inicio de tareas');
contador();
console.log('Fin de tareas');
let variable1 = 5

// const objeto1 = {
//     edad: 20,
//     nombre: 'Alex'
// };

// const arreglo1 = [1,2,3,4]

// arreglo1.push(5);

// console.log(objeto1);
// console.log(arreglo1);

// objeto1.nombre = 'Javier';

// console.log(objeto1);

// const variable2 = 10

// Esta funcion se encarga de hacaer la suma de dos numeros
function sumar(parametro1, parametro2) {
    const resultado = parametro1 + parametro2;
    
    if (true) {
        const test = 'variable de prueba';
        console.log(test);
    }

    console.log(variable1);

    return resultado;
}

console.log(sumar(1,2));

//console.log(resultado);

// const resultado = sumar(5,6)

// console.log(resultado)


// const resultadoSuma = (parametro1, parametro2) => {
//     return parametro1 + parametro2;
// }

// const resultadoSuma2 = (parametro1, parametro2) => parametro1 + parametro2

// console.log(resultadoSuma(3,4));
// console.log(resultadoSuma2(5,6));


const nombre = 'Alex'
const edad = 20

console.log('Hola soy ' + nombre + ' y tengo ' + edad + ' años');

console.log(`Hola soy ${nombre} y tengo ${edad} años`);

function mostrarLista(arreglo) {
    const longitudArreglo = arreglo.length;
    if (longitudArreglo == 0) {
        console.log('lista vacía');
        return;
    }

    for (i=0; i < arreglo.length; i++) {
        console.log(arreglo[i])
    }

    console.log(`Longitud de la lista ${longitudArreglo}`)
}

mostrarLista([1,2,3,4])
mostrarLista([])
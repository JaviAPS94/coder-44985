function sumar(parametro1, parametro2) {
    return parametro1 + parametro2;
}

const resultadoFlecha = (parametro1, parametro2) => {
return parametro1 + parametro2;
}

const resultadoFlecha2 = (parametro1, parametro2) => parametro1 + parametro2;

const resultado = sumar(1,2)
console.log(resultado);
console.log(resultadoFlecha(1,2))
console.log(resultadoFlecha2(1,2))

//EJERCICIO
function mostrarLisa(arreglo) {
    if (arreglo.length == 0) {
        console.log('lista vacia');
        return;
    }

    for (i=0; i< arreglo.length; i ++) {
        console.log(arreglo[i]);
    }

    console.log(`Longitud de la lista ${arreglo.length}`)
}

mostrarLisa([1,2,3])
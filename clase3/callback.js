let valoresOriginales = [1,2,3,4,5];

let nuevosValores = valoresOriginales.map(x=>x+1);

console.log(nuevosValores);

const funcionCallback = (valor) => {
    if (valor%2 === 0) {
        return valor;
    }  else {
        return "no es par";
    }
}

const evaluacionPares = valoresOriginales.map(funcionCallback);
console.log(evaluacionPares);

function operacion(numero1, numero2, numero3, numero4, numero5, operacion) {
    console.log('operacion')
    console.log('aritmetica')
    let resultado = operacion(numero1, numero2);

}
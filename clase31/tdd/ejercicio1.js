// const sumar = (num1, num2) => {
//     if (!num1 || !num2) return 0;
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') return null;
//     const result = num1 + num2;
//     return result;
// }

// const sumar = (...numeros) => {
//     let resultado = 0;
//     if (numeros.length === 0) return 0;
//     for (let i = 0; i < numeros.length; i++) {
//         if(typeof numeros[i] !== 'number') {
//             return null;
//         }
//         resultado += numeros[i];
//     }
//     return resultado;
// }

const sumar = (...numeros) => {
    if (numeros.length === 0) return 0;
    if(!numeros.every((numero) => typeof numero === "number")) return null;
    return numeros.reduce((a, b) => a + b);
}

// La función debe devolver null si algún parámetro no es numérico.
// La función debe devolver 0 si no se pasó ningún parámetro
// La función debe poder realizar la suma correctamente. 
// La función debe poder hacer la suma con cualquier cantidad de números.

let testPasados = 0;
const testTotales = 4;

// La función debe devolver null si algún parámetro no es numérico.

console.log('Test 1: La función debe devolver null si algún parámetro no es numérico');

const resultadoTest1 = sumar("2", 2);

if (resultadoTest1 === null) {
    console.log("Test 1: CORRECTO");
    testPasados++;
} else {
    console.log(`Test 1: INCORRECTO se recibe: ${resultadoTest1} se esperaba: null`)
};

// La función debe devolver 0 si no se pasó ningún parámetro

console.log('Test 2: La función debe devolver 0 si no se pasó ningún parámetro');

const resultadoTest2 = sumar();

if (resultadoTest2 === 0) {
    console.log("Test 2: CORRECTO");
    testPasados++;
} else {
    console.log(`Test 2: INCORRECTO se recibe: ${resultadoTest2} se esperaba: 0`)
};

// La función debe poder realizar la suma correctamente.

console.log('Test 3: La función debe poder realizar la suma correctamente.');

const resultadoTest3 = sumar(2, 5);

if (resultadoTest3 === 7) {
    console.log("Test 3: CORRECTO");
    testPasados++;
} else {
    console.log(`Test 3: INCORRECTO se recibe: ${resultadoTest3} se esperaba: 7`)
};

// La función debe poder hacer la suma con cualquier cantidad de números.

console.log('Test 4: La función debe poder hacer la suma con cualquier cantidad de números.');

const resultadoTest4 = sumar(2, 5, 2, 1, 3);

if (resultadoTest4 === 13) {
    console.log("Test 4: CORRECTO");
    testPasados++;
} else {
    console.log(`Test 4: INCORRECTO se recibe: ${resultadoTest4} se esperaba: 13`)
};

if (testPasados === testTotales) console.log('Todos los test fueron exitosos')
else console.log(`Se pasaron ${testPasados} tests de un total de ${testTotales}`);
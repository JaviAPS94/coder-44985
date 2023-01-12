const cadena1 = `          hola`;

console.log(cadena1);
console.log(cadena1.length);

const cadena2 = cadena1.trim();

console.log(cadena2);
console.log(cadena2.length);

const arregloAnidado = [1,2,3,4,5, [6,6,7,8], [9,10,11, [12,13,14], [15,16,17]]];
const arregloProcesado = arregloAnidado.flat(2);
console.log(arregloProcesado);
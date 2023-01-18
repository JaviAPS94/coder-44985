const objeto = {
    impuesto1: 12,
    impuesto2: 42,
    impuesto3: 35
}

const entradas = Object.entries(objeto);

console.log(entradas);

const claves = !Object.keys(objeto).includes('nombre');

console.log(claves);

const valores = Object.values(objeto);

console.log(valores);

const impuestosTotales = valores.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);

console.log(impuestosTotales);
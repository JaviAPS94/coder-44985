const suma = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) reject('Operación innecesaria');
        if (numero1 + numero2 < 0) reject('La calculadora sólo debe devolver valores positivos');
        resolve(numero1 + numero2);
    });
}

const resta = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) reject('Operación innecesaria');
        if (numero1 - numero2 < 0) reject('La calculadora sólo debe devolver valores positivos');
        resolve(numero1 - numero2);
    });
};

const multiplicacion = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) reject('La calculadora sólo debe devolver valores positivos');
        resolve(numero1 * numero2);
    });
}

const division = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero2 === 0) reject('No se puede dividir entre 0');
        resolve(numero1 / numero2);
    });
}

const calculos = async () => {
    try {
        const numero1 = 5;
        const numero2 = 3;

        const resultadoSuma = await suma(numero1, numero2);
        console.log(resultadoSuma);

        const resultadoSumaError = await suma(0, numero2);
        console.log(resultadoSumaError);

        const resultadoResta = await resta(numero1, numero2);
        console.log(resultadoResta);

        const restuladoMultiplicacion = await multiplicacion(numero1, numero2);
        console.log(restuladoMultiplicacion);

        const resultadoDivision = await division(numero1, numero2);
        console.log(resultadoDivision);
    } catch (error) {
        console.log(error)
    }
}

calculos();

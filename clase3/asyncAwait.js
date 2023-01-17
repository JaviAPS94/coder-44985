const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0) {
            reject('No se puede hacer divisiones entre cero');
        } else {
            resolve(dividendo/divisor);
        }
    })
};

const funcionAsincrona = async(numero1, numero2) => {
    try {
        let resultado = await dividir(10,0);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

funcionAsincrona(1, 2)
const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0) {
            reject('No se puede hacer divisiones entre cero');
        } else {
            resolve(dividendo/divisor);
        }
    })
};

const restar = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0) {
            reject('No se puede hacer divisiones entre cero');
        } else {
            resolve(dividendo/divisor);
        }
    })
};

// dividir(6,3)
// .then(resultado => {
//     console.log(resultado);
// }).catch(error => {
//     console.log(error);
// })

// dividir(6,0)
// .then(resultado => {
//     console.log(resultado);
// }).catch(error => {
//     console.log(error);
// })

// console.log();
// console.log(dividir(6,0));

new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
}).then(resultado => {
  console.log(resultado);
  return resultado * 2;  
}).then(resultado => {
    console.log(resultado);
    return resultado * 2;
}).catch(error => {

});






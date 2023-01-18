// const type = 'pepsi';
// let bebida;


// switch(type) {
//     case 'gaseosa':
//         bebida = 'Soy una gaseosa';
//         break;
//     case 'pepsi':
//         bebida = 'Soy una pepsi';
//         break;
//     case 'cocacola':
//         bebida = 'Soy una cocacola';
//         break;
//     default:
//         bebida = 'Bebida desconocida';
// }



// console.log(bebida);

function getBebida(type) {
    const bebidas = {
        'gaseosa': () => {
            return 'Soy una gaseosa'
        },
        'cocacola': () => {
            return 'Soy una cocacola';
        },
        'pepsi': () => {
            return 'Soy pepsi';
        },
        'default': () => {
            return 'Bebida desconocida';
        }
    };

    return (bebidas[type] || bebidas['default'])();
};

const resultado = getBebida('asdasd');
console.log(resultado);
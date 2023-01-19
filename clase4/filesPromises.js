const fs = require('fs');

const operacionesAsincronas = async () => {
    try {
        await fs.promises.writeFile('./fs-promesas.txt', 'Hola desde promesa');

        let resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8');
        console.log(resultado);

        await fs.promises.appendFile('./fs-promesas.txt', 'Contenido adicional');

        resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8');
        console.log(resultado);

        await fs.promises.unlink('./fs-promesas.txt')
    } catch (error) {
        console.log(error);
    }
}

operacionesAsincronas();
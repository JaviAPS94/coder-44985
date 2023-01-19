//Importando el módulo nativo de file system
const fs = require('fs')

//Escribir en archivo
fs.writeFileSync('./ejemplo.txt', 'Hola coder estoy en un archivo');

//Validar si el archivo existe o no
if(fs.existsSync('./ejemplo.txt')) {
    //Lectura del contenido del archivo
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');


    console.log(contenido);
    //Agregar contenido a nuestro archivo
    fs.appendFileSync('./ejemplo.txt', '\nMás contenido');

    //Lectura de archivo
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.unlinkSync('./ejemplo.txt')
}
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static especie = 'Humano';

    saludar = () => {
        console.log(`Hola soy ${this.nombre}`);
    }

    getEspecie = () => {
        console.log(`Soy ${Persona.especie}`);
    }
}

const persona1 = new Persona('Alex')
const persona2 = new Persona('Javier')

persona1.saludar();
persona1.getEspecie();

persona2.saludar();
persona2.getEspecie();
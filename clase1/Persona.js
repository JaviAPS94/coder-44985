class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static especio = 'humano';

    saludar = () => {
        console.log(`Hola soy ${this.nombre}`);
    }

    getEspecie = () => {
        console.log(`Soy ${Persona.especio}`);
    }
}

const perssona1 = new Persona('Alex');
const persona2 = new Persona('Javier');

perssona1.saludar();
perssona1.getEspecie();

persona2.saludar();
persona2.getEspecie()
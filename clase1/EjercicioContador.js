class Contador {
    constructor(responsable) {
        this.responsable = responsable;
        this.conteo = 0;
    }

    static contadorGlobal = 0;

    getResponsable = () => {
        return this.responsable;
    }

    contar = () => {
        this.conteo++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual = () => {
        return this.conteo;
    }

    getCuentaGlobal = () => {
        return Contador.contadorGlobal;
    }
}

const contador = new Contador('Mauricio')
contador.contar();
contador.contar();
//console.log(contador.getCuentaIndividual());
//console.log(contador.getCuentaGlobal());

const contador1 = new Contador('Alex')
contador1.contar();
contador1.contar();
//console.log(contador1.getCuentaIndividual());
//console.log(contador1.getCuentaGlobal());

const contador2 = new Contador('Javier')
contador2.contar();
contador2.contar();
console.log(contador2.getCuentaIndividual());
console.log(contador2.getCuentaGlobal());


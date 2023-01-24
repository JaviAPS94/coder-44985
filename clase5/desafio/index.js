import moment from "moment";

const hoy = moment();

const fechaNacimiento = moment('1994-20-17', 'YYYY-MM-DD');

if(fechaNacimiento.isValid()) {
    console.log(`Desde mi nacimiento han pasado ${hoy.diff(fechaNacimiento,'days')} días`);
} else {
    console.error('Fecha inválida');
}

const login = (user, password) => {
    if(!password) return "No se ha proporcionado un password"
    if(!user) return "No se ha proporcionado un usuario"
    if(password !== '123') return "Contraseña incorrecta"
    if(user !== 'coderUser') return "Credenciales incorrectas"
    return "logueado"
}

// Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
// Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
// Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
// Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
// Si  el usuario y contraseña coinciden, consologuear (“logueado”)

let testPasados = 0;
const testTotales = 5;

console.log("Test 1: Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)")
const resultadoTest1 = login('alex', '');
if(resultadoTest1 === "No se ha proporcionado un password") {
    console.log("Test 1: EXITOSO");
    testPasados++;
} else {
    console.log(`Test 1: NO EXITOSO se esperaba: No se ha proporcionado un password se recibe: ${resultadoTest1}`)
}

console.log("Test 2: Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)")
const resultadoTest2 = login('', '1234');
if(resultadoTest2 === "No se ha proporcionado un usuario") {
    console.log("Test 2: EXITOSO");
    testPasados++;
} else {
    console.log(`Test 2: NO EXITOSO se esperaba: No se ha proporcionado un usuario se recibe: ${resultadoTest2}`)
}

console.log("Test 3: Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)")
const resultadoTest3 = login('alex', '1234');
if(resultadoTest3 === "Contraseña incorrecta") {
    console.log("Test 3: EXITOSO");
    testPasados++;
} else {
    console.log(`Test 3: NO EXITOSO se esperaba: Contraseña incorrecta se recibe: ${resultadoTest3}`)
}

console.log("Test 4: Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)")
const resultadoTest4 = login('alex', '123');
if(resultadoTest4 === "Credenciales incorrectas") {
    console.log("Test 4: EXITOSO");
    testPasados++;
} else {
    console.log(`Test 4: NO EXITOSO se esperaba: Credenciales incorrectas se recibe: ${resultadoTest4}`)
}

console.log("Test 5: Si  el usuario y contraseña coinciden, consologuear (“logueado”)")
const resultadoTest5 = login('coderUser', '123');
if(resultadoTest5 === "logueado") {
    console.log("Test 5: EXITOSO");
    testPasados++;
} else {
    console.log(`Test 5: NO EXITOSO se esperaba: logueado se recibe: ${resultadoTest5}`)
}

if (testPasados === testTotales) console.log('Todos los test fueron exitosos')
else console.log(`Se pasaron ${testPasados} tests de un total de ${testTotales}`);
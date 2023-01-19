const fs = require("fs");

const date = new Date().toLocaleDateString();
const hour = new Date().toLocaleTimeString();

fs.writeFile("./date.txt", `Fecha: ${date} ... Hora: ${hour}`, (error) => {
  if (error) throw new Error(`No se pudo crear el archivo: ${error}`);

  fs.readFile("./date.txt", "utf-8", (error, result) => {
    if (error) throw new Error(`Error al leer el archivo: ${error}`);
    console.log(result);
  });
});


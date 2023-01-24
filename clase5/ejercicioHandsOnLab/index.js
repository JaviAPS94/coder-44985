import UserManager from "./Manager/UserManager.js";

const userManager = new UserManager();

const env = async() => {
    const users = await userManager.getUsuarios();
    console.log(users);

    const user = {
        nombre: 'Alex',
        apellido: 'Pinaida',
        nombre_usuario: 'alex',
        contrasena: '123'
    }

    await userManager.crearUsuario(user);
    const segundoLlamadoUsuarios = await userManager.getUsuarios();
    console.log(segundoLlamadoUsuarios);

    await userManager.validarUsuario('alex', '123');
    await userManager.validarUsuario('alex', '1234');
};

env();
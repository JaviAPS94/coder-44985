import fs from 'fs';

const path = './files/Usuarios.json'

export default class ManagerUsuarios {
    consultarUsuarios = async() => {
        try {
            if (fs.existsSync(path)) {
                const data = await fs.promises.readFile(path, 'utf-8');
                console.log(data);
                const users = JSON.parse(data);
                return users; 
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    crearUsuario = async(usuario) => {
        const users = await this.consultarUsuarios();
        if (users.length === 0) {
            usuario.id = 1;
        } else {
            usuario.id = users[users.length -1].id + 1;
        }
        users.push(usuario);
        
        await fs.promises.writeFile(path, JSON.stringify(users, null, '\t'));
        return usuario;
    }
}
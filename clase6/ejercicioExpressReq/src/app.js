import express from 'express';

const app = express();

const usuarios = [
    {id: 1, nombre: 'Mauricio', apellido: 'Espinosa', edad: 25, genero: 'M'},
    {id: 2, nombre: 'Natalia', apellido: 'Cardozo', edad: 20, genero: 'F'},
    {id: 3, nombre: 'Roberto', apellido: 'Gómez', edad: 28, genero: 'M'},
    {id: 4, nombre: 'Maria', apellido: 'Gómez', edad: 30, genero: 'F'}
]

// path params
app.get('/usuario/:id', (req, res) => {
    const idUsuario = Number(req.params.id);
    const idUsuarioAdiconal = Number(req.query.idAdicional);

    const usuario = usuarios.find(u=>u.id === idUsuario);
    if(!usuario) return res.send({error: 'Usuario no encontrado'});

    res.send(usuario);
});

//query params
app.get('/query/params', (req, res) => {
    const { genero, edad, id } = req.query;
    
    if(!genero || (genero !== 'M' && genero !== 'F')) return res.send(usuarios);
    const usuariosFiltrados = usuarios.filter(u=>u.genero === genero);

    res.send(usuariosFiltrados);
})

app.get('/store-schedule', (req, res) => {
    const { genero } = req.params;
    const { edad } = req.query;

    if(!genero || (genero !== 'M' && genero !== 'F')) return res.send(usuarios);

    if(!edad) return res.send(usuarios);

    const filteredUsers = usuarios.filter(u=>u.genero === genero && u.edad > Number(edad));

    res.send(filteredUsers);
})

app.listen(8080, () => console.log('Listening on port 8080'));
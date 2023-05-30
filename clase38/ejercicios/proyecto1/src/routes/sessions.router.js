import { Router } from 'express';

const router = Router();

const users = [];

router.post('/register',(req,res)=>{
    const user = req.body;
    //Validacion de campos del usuario, que sea obligatorio el nombre, apellido, correo, password A04
    //El patrón de diseño por capas no esta aplicado correctamente, la lógica de negocio debe ir en la capa inferior (controller) A04
    console.log(user);
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    //Antes de guardar el usuario debemos hashear la contraseña, nunca almacenar en texto plano A07
    users.push(user);
    res.send({status:"success",payload:user})
})

export default router;
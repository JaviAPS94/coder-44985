import fs from 'fs';
import { Blob } from 'buffer';

const lecturaYEscritura = async() => {
    try {
        const datos = await fs.promises.readFile('./package.json','utf-8');
        const contenido = datos;
        const contenidoObjeto = JSON.parse(datos);
        
        const size = new Blob([datos]).size;
    
        const info = {
            contenidoString: contenido,
            contenidoObj: contenidoObjeto,
            size
        }
    
        console.log(info);
        await fs.promises.writeFile('./info.json', JSON.stringify(info, null, '\t'))   
    } catch (error) {
        console.log(error);
    }
}

lecturaYEscritura()




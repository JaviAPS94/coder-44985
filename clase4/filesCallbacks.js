const fs = require('fs')

fs.writeFile('./info-callback.txt', 'Hola desde cb', error => {
    if (error) {
        throw new Error(`Error en escritura: ${error}`)
    }
    
    fs.readFile('./info-callback.txt', 'utf-8', (error, contenido) => {
        if (error) {
            throw new Error(`Error en lectura: ${error}`)
        }
    
        console.log(contenido)
    
        fs.appendFile('./info-callback.txt','mas contenido', (error) => {
            if (error) {
                throw new Error(`Error en lectura: ${error}`)
            }
            
            fs.readFile('./info-callback.txt', 'utf-8', (error, contenido) => {
                if (error) {
                    throw new Error(`Error en lectura: ${error}`)
                }

                console.log(contenido);

                fs.unlink('./info-callback.txt', (error) => {
                    if (error) {
                        throw new Error(`Error en lectura: ${error}`)
                    }
                })
            })

        })
    
    })
})
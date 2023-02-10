const fs = require('fs'); // libreria de file system para leer y grabar archivos
const colors = require('colors') // libreria para colores

const crearArchivo = async (base = 5, list, max) => {
    
    if(list) {
        console.log('==========================================='.green);
        console.log(`             Tabla del ${colors.green(base)}`);
        console.log('==========================================='.green);
    }

    try {
        let salida = '';
        let consola= '';

        for(i=1; i <= max; i++) {
            consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${colors.magenta(i*base)}\n`; // \n es salto de hoja
            salida += `${base} x ${i} = ${i*base}\n`; // hice otra linea xq con los colores el archivo se graba mal
        }
        
        if (list) console.log(consola);
    
        // Grabo un archivo de forma asincronica
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err; // ocurrio un error cancelo la ejecucion usando throw 
        //     console.log(`tabla-${base}.txt creada`); // se grabo la tabla
        // })
    
        // Grabo un archivo de forma sincronica
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); // como es sincronica no necesito el await
        return (`tabla-${base}.txt`); // devuelvo el nombre
    } catch(error) {
        throw error;
    }
}

module.exports = {
    crearArchivo // como el nombre e la propiedad es igual al valor puedo obviar de escribirla EMAC6
}
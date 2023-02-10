const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
require('colors') // libreria para colores


console.clear();

// Argumentos de console. console.log(process.argv);
// El 1ero es el path adonde esta instalado node, el 2do es el path adonde se encuentra
// la app que estoy ejecutando. Apartir del 3ro vienen los argumentos que le paso cuando corro la app


crearArchivo(argv.b, argv.l, argv.h)
    .then (file => console.log(file.green, 'creada'.green))
    .catch(err => console.log(err))
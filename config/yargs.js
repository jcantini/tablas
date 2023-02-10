const { check } = require('yargs');

// Importo yargs y configuro el argumento 'base' y un argumento para listar o no la tabla que se crea
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // pido que sea requerido
        describe: 'Es la base de la table de multiplicar' // es el texto que se muestra con node app --help
    })    
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la table creada en la consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Cantidad de veces que se multiplicará'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true; // si no dio error devuelvo true
    })
    .argv;

module.exports = {
        argv
    }
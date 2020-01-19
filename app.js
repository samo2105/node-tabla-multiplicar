const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    }).argv;

const {crearArchivo} = require('./multiplicar/multiplicar');

console.log(argv.base)
/*if (process.argv[2]){
    let base = process.argv[2];
    if(!Number(base)){
        console.log(`El valor ${base} no es un número`);
        return
    }
}*/

/*
crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
    .catch(e => console.log(e));*/

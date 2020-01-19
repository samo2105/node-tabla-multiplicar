const {crearArchivo} = require('./multiplicar/multiplicar');

if (process.argv[2]){
    let base = process.argv[2];
    if(!Number(base)){
        console.log(`El valor ${base} no es un número`)
        return
    }
}

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
    .catch(e => console.log(e));
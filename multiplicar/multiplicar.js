const fs = require('fs');

let crearArchivo = async (numero) => {

    if (!Number(numero)){
        throw new Error(`El valor ${numero} no es un número`)
    }

    let data = "";

    for (let i = 1; i <= 10; i++) {
        data += `${numero} * ${i} = ${numero * i} \n`
    }

    fs.writeFile(`tablas/tabla_multiplicar${numero}.txt`, data, (err) => {
        if (err) throw err;
    });

    return `tabla_multiplicar${numero}.txt`
};

module.exports = {crearArchivo}

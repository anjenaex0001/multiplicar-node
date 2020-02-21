// requires que vienen preinstalados
const fs = require('fs');
const colors = require('colors');
//requires que se sacan de internet
//requires que hacemos nosotros

let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`=========tabla de ${ base }==========`.red);
    console.log('============================='.green);
    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    };

};

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });

    });

};


module.exports = {
    crearArchivo,
    listarTabla
};
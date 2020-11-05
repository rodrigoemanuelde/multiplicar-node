const fs = require('fs');
const { resolve } = require('path');

let listarArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {
        if (!Number(base)) {
            rej(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            rej(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${i * base}`);
        }
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {
        if (!Number(base)) {
            rej(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else res(`tabla-${base}.txt`);
            console.log('The file has been saved!');
        });
    });
};

module.exports = { crearArchivo, listarArchivo };
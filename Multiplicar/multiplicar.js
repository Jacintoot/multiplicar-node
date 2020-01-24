const fs = require("fs");
const colors = require('colors')

let a = "";
let listarTabla = (base, limite) => {

    console.log(colors.bgWhite(colors.red("========")) + colors.white(base) + "".red + "========".blue);
    console.log("====Listado de tabla====".blue);
    console.log(colors.rainbow("============" + limite) + "============".blue);
    for (let i = 1; i <= limite; i++) {
        a += `${i} ${i*base} \n`;
    }
    console.log(a.green);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un número')
            return;
        }

        for (let i = 1; i <= limite; i++) {
            a += `${i} ${i*base} \n`;
        }

        fs.writeFile(`Tablas\ de\ multiplicar/Tabla del ${base}-al-${limite}.txt`, a, (err) => {
            if (err)
                reject(err);
            else
                resolve('The file has been saved!')
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
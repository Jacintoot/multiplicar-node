const opt = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar',
        'Imprime en consola la tabla de multiplicar',
        opt

    )
    .command('crear',
        'Crea la tabla de multiplicar con base y límite en el título',
        opt
    )
    .argv;
module.exports = { argv }
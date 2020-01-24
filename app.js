const argv = require('./config/yargs').argv
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let base = argv.b;
let limite = argv.limite;
switch (argv._[0]) {
    case 'listar':
        console.log("Listar");
        listarTabla(base, limite)
        break;
    case 'crear':
        console.log("Crear");
        crearArchivo(base, limite).then(archivo => console.log('Archivo creado: ' + archivo)).catch(err => console.log(err))
        break;
    default:
        console.log("Comando no reconocible")
}
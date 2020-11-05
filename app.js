const { argv } = require('./config/yargs');

const {
    crearArchivo,
    listarArchivo,
} = require('../03-bases-node/multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then((listado) => console.log(`Listado`))
            .catch((e) => {
                console.log(e);
            });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((e) => {
                console.log(e);
            });
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log('Limite', argv.limite);

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */
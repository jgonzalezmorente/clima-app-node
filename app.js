const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima(40.42955, -3.67930)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ direccion } es de ${ temp }.`;

    } catch (error) {
        return `No se pudo determinar el clima ${ direccion }`;
    }

};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


//console.log(`No se pudo determinar el clima de ${ argv.direccion }`)
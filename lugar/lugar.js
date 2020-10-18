const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const resp = await axios.get(`https://geocode.xyz/${ encodedUrl }?json=1`);
    if (resp.data.error) {
        throw new Error(resp.data.error.description);
    }
    const direccion = resp.data.standard.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}
const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=0ea8baeaf5f98ebc2ebafd9e1aaf9d9c&units=metric`);
    return resp.data.main.temp;

};

module.exports = {
    getClima
}
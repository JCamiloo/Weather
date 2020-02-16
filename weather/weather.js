const axios = require('axios');
const API_KEY = '24c7f16377de0cb34e1a3f923881edc9';

const getWeather = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  return resp.data.main.temp;
} 

module.exports = { getWeather }

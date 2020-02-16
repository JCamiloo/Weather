const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'Place address to fetch weather data',
    demand: true
  }
}).argv;

const getInfo = async (address) => {
  try {
    const coords = await place.getPlaceLatLng(address);
    const temperature = await weather.getWeather(coords.latitude, coords.longitude);
    return `${address}'s weather is ${temperature} °C`
  } catch (err) {
    return `Can't found ${address}'s weather`
  }
}

getInfo(argv.address).then(console.log).catch(console.log);
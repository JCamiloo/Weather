const place = require('./place/place');

const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'Place address to fetch weather data',
    demand: true
  }
}).argv;

place.getPlaceLatLng(argv.address).then(console.log);
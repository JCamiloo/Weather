const axios = require('axios');

const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'Place address to fetch weather data',
    demand: true
  }
}).argv;

const encodedUrl = encodeURI(argv.address);

const instance = axios.create({
  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
  headers: {'X-RapidAPI-Key': '9b64de9d90mshe44f024108244e9p1aff1fjsncfffbc0e92b2'}
});

instance.get().then(resp => console.log(resp.data.Results[0])).catch(err => console.log('error', err));
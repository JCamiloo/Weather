const axios = require('axios');

const getPlaceLatLng = async (address) => {

  const encodedUrl = encodeURI(address);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {'X-RapidAPI-Key': '9b64de9d90mshe44f024108244e9p1aff1fjsncfffbc0e92b2'}
  });
  
  const response = await instance.get();

  if (response.data.Results.length === 0) {
    throw new Error(`No results found for ${address}`)
  }

  const data = response.data.Results[0];
  const resAddress = data.name;
  const latitude = data.lat;
  const longitude = data.lon;

  return { resAddress, latitude, longitude };
}

module.exports = { getPlaceLatLng };
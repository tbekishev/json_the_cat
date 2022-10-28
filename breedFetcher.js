const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  url = url + breedName;

  request(url, (error, response, body) => {
    if (error || body.length <= 2) return callback(error, null);
    const data = JSON.parse(body);
    const desc = data[0].description;
    return callback(null, desc);
  });
};
module.exports = { fetchBreedDescription };
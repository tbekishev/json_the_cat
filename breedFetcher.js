const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
url = url + process.argv[2];
const requestContent = function(url) {
  return new Promise((resolve, reject) =>{
    request(url, (error, response, body) => {
      if (error !== null) return reject(error);
      console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body);
      if (body === {}) return reject(error);
      return resolve(data);
      
    });
  });
};

requestContent(url)
  .then((data) => console.log(data[0].description))
  .catch((error) => console.log("Something happened: " + error));
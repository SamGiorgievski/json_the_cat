const request = require('request');
const args = process.argv.slice(2);

request("https://api.theatapi.com/v1/breeds/search?q=" + args[0], (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
    return error;
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log("Error, breed not found");
  } else {
    console.log(data[0]);
  }

});
var request = require('request');
var status = undefined;

request('http://google.com', function(error, response, body){
  if(!error && response.statusCode == 200){
    status = response.statusCode;
  }
});

console.log(status);
console.log('fin de programa');

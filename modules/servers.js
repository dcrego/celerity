// Requires
const fs = require('fs');       // https://nodejs.org/api/fs.html
const ssl = require('./ssl');
// Constants
const ERROR_CODE = 500;
const ERROR_HEADERS = {'Content-Type': 'text/plain'};
const ERROR_BODY = 'Error, please reload this page (F5) after a while. Thank you!';
const SERVER_FACTORIES = {
  // protocol: factory
  http: require('http').createServer // https://nodejs.org/api/http.html
}
// Functions
SERVER_FACTORIES.https = function (callback) {
  return require('https').createServer(ssl.options, callback); // https://nodejs.org/api/https.html
}
exports.Server = function (name, config) {
  this.name = name;
  this.protocol = config.protocol;
  this.port = config.port;
  var content = require(`../servers/${this.name}/content.json`);
  function handleRequest (req, res) {
    fs.readFile(content.bodyPath, (err, data)=>{
      if (err) {
        console.console.log(new Date(), err);
        res.writeHead(ERROR_CODE, ERROR_HEADERS);
        res.end(ERROR_BODY);
      } else {
        res.writeHead(content.statusCode, content.headers);
        res.end(data);
      }
    });
  }
  this.listen = function (callback) {
    if (!callback) {
      callback = function () {
        console.log(new Date(), config.protocol, 'server running on port', config.port);
      }
    }
    SERVER_FACTORIES[config.protocol](handleRequest).listen(config.port, callback);
  }
}

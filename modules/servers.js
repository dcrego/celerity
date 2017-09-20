// Requires
const fs = require('fs');       // https://nodejs.org/api/fs.html
const config = require('../servers/index.json');
// Constants
const ERROR_CODE = 500;
const ERROR_HEADERS = {'Content-Type': 'text/plain'};
const ERROR_BODY = 'Error, please reload this page (F5) after a while. Thank you!';
// Functions
function Server(name) {
  this.name = name;
  var content = require(`../servers/${this.name}/content.json`);
  this.handleRequest = function (req, res) {
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
}
var name;
for (var id in config) {
  name = config[id];
  exports[name] = new Server(name);
}
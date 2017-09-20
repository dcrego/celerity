// Requires
const srv = require('./modules/servers');
const config = require('./servers/index.json');
const logging = require('./modules/logging');
// Constants
const LOG = new logging.Logger('main.js');
// Main
console.clear();
LOG.log('Initializing server...');
for (var name in config) {
  new srv.Server(name, config[name]).listen();
}
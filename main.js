console.clear();
console.log(new Date(), 'Initializing server');
// Requires
const srv = require('./modules/servers');
const config = require('./servers/index.json');
// Servers
for (var name in config) {
  new srv.Server(name, config[name]).listen();
}
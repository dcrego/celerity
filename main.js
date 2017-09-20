console.log(new Date(), 'Initializing server');
// Requires
const http = require('http');   // https://nodejs.org/api/http.html
const https = require('https'); // https://nodejs.org/api/https.html
const ssl = require('./modules/ssl');
const servers = require('./modules/servers');
const config = require('./resources/json/config.json');
// HTTP server
http.createServer(servers.public.handleRequest).listen(config.ports.http, ()=>{
  console.log(new Date(), 'HTTP server running on port', config.ports.http);
});
// HTTPS server
https.createServer(ssl.options, servers.safe.handleRequest).listen(443, ()=>{
  console.log(new Date(), 'HTTPS server running on port', config.ports.https);
});

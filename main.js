console.log(new Date(), 'Initializing server');
// Requires
const fs = require('fs');       // https://nodejs.org/api/fs.html
const http = require('http');   // https://nodejs.org/api/http.html
const https = require('https'); // https://nodejs.org/api/https.html
const ssl = require('./modules/ssl');
const config = require('./resources/json/config.json');
// HTTP server
http.createServer((req,res)=>{
  fs.readFile('resources/html/public.html', (err, data)=>{
    if (err) {
      console.console.log(new Date(), err);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error, please reload this page (F5) after a while. Thank you!');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}).listen(config.ports.http, ()=>{
  console.log(new Date(), 'HTTP server running on port', config.ports.http);
});
// HTTPS server
https.createServer(ssl.options, (req,res)=>{
  fs.readFile('resources/html/private.html', (err, data)=>{
    if (err) {
      console.console.log(new Date(), err);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error, please reload this page (F5) after a while. Thank you!');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}).listen(443, ()=>{
  console.log(new Date(), 'HTTPS server running on port', config.ports.https);
});

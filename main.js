console.log(new Date(), 'Initializing server'); // https://nodejs.org/api/http.html
// Requires
const fs = require('fs');
const http = require('http');
// Server
http.createServer((req,res)=>{
  fs.readFile('resources/html/splash.html', (err, data)=>{
    if (err) {
      console.console.log(new Date(), err);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error, please reload this page (F5) after a while. Thank you!');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}).listen(80, ()=>{
  console.log('Server running on port 80');
});
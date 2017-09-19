console.log(new Date(), 'Initializing server'); // https://nodejs.org/api/http.html
// Requires
const http = require('http');
// Constants
const headers = {'Content-Type': 'text/plain'};
// Server
http.createServer((req,res)=>{
  res.writeHead(200, headers);
  res.write('Hello world!');
  res.end();
}).listen(80, function(){
  console.log('Server running on port 80');
});
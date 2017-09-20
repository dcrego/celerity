//Requires
const util = require('util');
// Exports
exports.Logger = function (tag) {
  this.tag = tag;
  function format(message) {
    var now = new Date();
    now = util.format(now);
    now = now.substr(0, now.length-1);
    now = now.replace('T', ' ');
    return now+' '+tag+' '+message;
  }
  this.dir = function (obj) {
    console.dir(obj);
  }
  this.error = function (message, args) {
    arguments[0] = format(arguments[0]);
    console.trace.apply(console, arguments);
  }
  this.log = function(data, args) {
    arguments[0] = format(arguments[0]);
    console.log.apply(console, arguments);
  }
  this.printRequest = function(req) {
    console.log(format(req.method+' '+req.url+' HTTP/'+req.httpVersion));
    console.group();
    for (var key in req.headers) {
      console.log('\t'+key+': '+req.headers[key]);
    }
    console.groupEnd();
  }
}

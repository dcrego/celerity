// Requires
const fs = require('fs');
const config = require('../resources/ssl/config.json').sslConfig;
exports.options = {
  cert: fs.readFileSync(config.cert),
  key: fs.readFileSync(config.key),
  passphrase: String(fs.readFileSync(config.passphrase))
}
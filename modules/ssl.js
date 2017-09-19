// Requires
const fs = require('fs');
const config = require('../resources/json/config.json')['ssl-options'];
exports.options = {
  cert: fs.readFileSync(config.cert),
  key: fs.readFileSync(config.key),
  passphrase: String(fs.readFileSync(config.passphrase))
}
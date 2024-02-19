const fs = require('fs');
const console = require('./console');

module.exports.read = (callback) => fs.readFile(process.env.XML_PATH, 'utf8', (err, data) => {
    if(err) return console.log("Error reading file: ", err);
    callback(data)
});

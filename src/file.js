const fs = require('fs');
const config = require("./config");
const console = require('./console');
const { xml2json } = require('xml-js');

const isFile = () => {
    if(fs.lstatSync(config.XML_PATH).isFile()) {
        return true;
    }
    console.error(`File not found: ${config.XML_PATH}`);
    return false;
};

const parseXML = (xml = '') => {
    if(!xml) return null;

    try {
        return JSON.parse(xml2json(xml, { compact: true }));
    }
    catch (error) {
        console.error("Error parsing XML.");
    }

    return null;
}

const readFileWithFallback = (callback) => {
    if(!isFile()) return;

    let readTimeout = 50;
    let maxAttempts = 10;
    let readAttempts = 0;

    const readFile = () => {
        console.log("Reading file.");

        fs.readFile(config.XML_PATH, 'utf8', (error, data) => {
            const json = parseXML(data);
            const debug = { readAttempts, maxAttempts, readTimeout };

            if (json) return callback({ json, debug });
            if (error) return console.log("Error reading file.");

            if (readAttempts >= maxAttempts) {
                console.log("Max read attempts reached.");
                callback({ json: {}, debug });
                readAttempts = 0;
                return;
            }

            readAttempts++;
            setTimeout(readFile, readTimeout);
        });
    }

    readFile();
}

module.exports.isFile = isFile;
module.exports.readFile = readFileWithFallback;

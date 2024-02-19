const console = require('./console');
const chokidar = require("chokidar");

let watcher = null;
module.exports.init = () => {
    if (watcher) return watcher;
    watcher = chokidar.watch(process.env.XML_PATH)

    watcher.on('ready', () => {
        console.log('Watcher ready:', process.env.XML_PATH);
    })

    watcher.on('all', (event, path) => {
        console.log(`Watcher ${event}:`, path);
    })

    watcher.on('error', (error) => {
        console.log('Watcher error:', error)
    })

    return watcher;
}

module.exports.on = (event, callback) => {
    if (!watcher) return;
    watcher.on(event, callback);
}

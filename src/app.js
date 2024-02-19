const file = require('./file');
const socket = require('./socket');
const watcher = require('./watcher');

module.exports = () => {
    socket.init();
    watcher.init();

    watcher.on('change', () => {
        file.read((data) => {
            socket.emit("info.radio.xml.change", data);
        });
    });
}

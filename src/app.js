const file = require('./file');
const socket = require('./socket');
const watcher = require('./watcher');

module.exports = () => {
    if(!file.isFile()) return process.exit(1);

    socket.init();
    watcher.init();

    watcher.on('change', () => {
        const eventIsoDateTime = new Date().toISOString();
        file.readFile((data) => {
            socket.emit("info.radio.xml.change", {
                data,
                meta: {
                    emitIsoDateTime: new Date().toISOString(),
                    eventIsoDateTime,
                }
            });
        });
    });
}

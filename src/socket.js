const io = require("socket.io-client");
const config = require('./config');
const console = require('./console');

let socket = null;
module.exports.init = () => {
    if (socket) return socket;

    socket = io.connect(config.API_HOST, {
        path: "/io/",
        auth: {
            token: config.API_AUTH
        }
    });

    socket.on("connect", () => {
        console.log("Connected to:", config.API_HOST);
    });

    socket.on("connect_error", (err) => {
        console.log("Unable to connect to:", config.API_HOST, err.message);
    });

    return socket;
};

module.exports.emit = (event, data) => {
    if (!socket) return;
    console.log("Emitting:", event);
    socket.emit(event, data);
};


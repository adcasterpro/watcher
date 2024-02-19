const io = require("socket.io-client");
const console = require('./console');

let socket = null;
module.exports.init = () => {
    if (socket) return socket;

    socket = io.connect(process.env.API_HOST, {
        path: "/io/",
        auth: {
            token: process.env.API_AUTH
        }
    });

    socket.on("connect", () => {
        console.log("Connected to:", process.env.API_HOST);
    });

    socket.on("connect_error", (err) => {
        console.log("Unable to connect to:", process.env.API_HOST, err.message);
    });

    return socket;
};

module.exports.emit = (event, data) => {
    if (!socket) return;
    console.log("Emitting:", event, data);
    socket.emit(event, {
        data,
        meta: {
            isoDateTime: new Date().toISOString(),
        }
    });
};


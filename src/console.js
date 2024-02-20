const config = require("./config");

module.exports = (() => {
    if(config.APP_LOGS === 'true') {
        return console;
    }
    return {
        log: () => {},
        info: () => {},
        warn: () => {},
        error: () => {}
    };
})();

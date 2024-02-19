module.exports = (() => {
    if(process.env.APP_LOGS === 'true') {
        return console;
    }
    return {
        log: () => {},
        info: () => {},
        warn: () => {},
        error: () => {}
    };
})();

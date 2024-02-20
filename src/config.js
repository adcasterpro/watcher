const config =  {
    XML_PATH: process.env.XML_PATH,
    API_AUTH: process.env.API_AUTH,
    API_HOST: process.env.API_HOST,
    APP_LOGS: process.env.APP_LOGS,
}

if(!config.XML_PATH || !config.API_AUTH || !config.API_HOST) {
    console.log("Invalid configuration. Please check your .env file.");
    process.exit(1);
}

module.exports = config;

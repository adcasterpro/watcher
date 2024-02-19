## Dependencies
Your server needs node.js and npm installed. You can download it from [here](https://nodejs.org/en/download/).

## Installation
1. Clone the repository or download the zip file and extract it.
2. Open the terminal and navigate to the cloned / downloaded folder ```cd path/to/folder```
3. Install the dependencies ```npm install```

## Configuration
1. Copy the ```.env.example``` file and rename it to ```.env```.
2. Open ```.env``` file.
3. Set the environment variables
    - ```XML_PATH``` - The absolute path to the xml file.
    - ```API_AUTH``` - The API key for the server.

## Usage
1. Open the terminal and navigate to the cloned / downloaded folder ```cd path/to/folder```
2. Start ```npm run start```
3. Stop ```npm run stop```
4. Restart ```npm run restart```
5. Status ```npm run status```

## Development
1. Open the terminal and navigate to the cloned / downloaded folder ```cd path/to/folder```
2. Enable logs by setting the environment variable in ```.env``` file
   - ```APP_LOGS=true```
3. Start in development mode ```npm run dev```

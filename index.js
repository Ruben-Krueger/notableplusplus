const constants = require('./constants.js');
const { app, BrowserWindow } = require('electron');


app.on('ready', function() {


    let window = new BrowserWindow({width: constants.width, height: constants.height});

    // load the index.html of the app.
    window.loadFile('public/views/index.html');

    window.on('closed', function () {
        app.quit();
    });

});


/* jslint node: true */
'use strict';

// Node dependences
/**
 *  REQUIRES
 */

// related third party node_modules
var mongoose = require('mongoose');

// standard core node_modules requires
var http = require('http');

// local node-modules specific requires
var config = require('./config'),
    expressServer = require('./app/expressServer');

var app = new expressServer(config);

//setup mongoose
mongoose.connect('mongodb://' + config.mongodb.uri);

/**
 * Setup the web server
 */
var server = http.createServer(app.expressServer);

//Start Server
server.listen(config.port, function () {
 console.log('node-mvc runnig in http://localhost:%s/', config.port);
});

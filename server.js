/* jslint node: true */
'use strict';

// Node dependences
/**
 *  REQUIRES
 */

// related third party node_modules

// standard core node_modules requires
var http = require('http');

// local node-modules specific requires
var config = require('./config');
var expressServer = require('./app/expressServer');

var app = new expressServer(config);

/**
 * Setup the web server
 */
var server = http.createServer(app.expressServer);

//Start Server
server.listen(config.port, function () {
 console.log('node-mvc runnig in http://localhost:%s/', config.port);
});

/* jslint node: true */
'use strict';

// Node dependences
/**
 *  REQUIRES
 */

// related third party node_modules
var express = require('express');

// standard core node_modules requires
var http = require('http');

// local node-modules specific requires
var config = require('./config');

/**
 * Create express app
 */
var expressServer = new express();

// Routes
expressServer.get('/article/save/', function (req, res, next ) {
  res.send("I am in save url");
});

expressServer.get('/article/list/', function (req, res, next ) {
  res.send("I am in list url");
});

// setup the web server
var server = http.createServer(expressServer);

//Start Server
server.listen(config.port, function () {
 console.log('node-mvc runnig in http://localhost:%s/', config.port);
});

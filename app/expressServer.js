/* jslint node: true */
'use strict';

// // Node dependences
/**
 *  REQUIRES
 */

// related third party node_modules
var express = require('express');

// standard core node_modules requires

// node-modules specific requires
var middlewares = require('./middlewares/admin');

var expressServer = function (config) {

  this.config = config || {};

  /**
   * Create express app
   */
  this.expressServer = new express();

  // Middlewares - between express and routes
  for (var middleware in middlewares) {
    this.expressServer.use(middlewares[middleware]);
  }

  // Routes
  this.expressServer.get('/article/save/', function (req, res, next ) {
    res.send("I am in save url");
  });

  this.expressServer.get('/article/list/', function (req, res, next ) {
    res.send("I am in list url");
  });

};

module.exports = expressServer;

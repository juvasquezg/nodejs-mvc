/* jslint node: true */
'use strict';

// // Node dependences
/**
 *  REQUIRES
 */

// related third party node_modules
var express = require('express'),
    swig = require('swig');

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

  this.expressServer.engine('html', swig.renderFile);
  this.expressServer.set('view engine', 'html');
  this.expressServer.set('views', __dirname + '/server/views/');
  swig.setDefaults({varControls: ['[[', ']]']}); // Para usar {} en Angular

  // Routes
  this.expressServer.get('/article/save/', function (req, res, next ) {
    res.render('index', {nombre: 'Julian V.'});
  });

  this.expressServer.get('/article/list/', function (req, res, next ) {
    res.send("I am in list url");
  });

};

module.exports = expressServer;

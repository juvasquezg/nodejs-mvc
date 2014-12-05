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

// node-modules local specific requires
var env = process.env.NODE_ENV || 'production',
    middlewares = require('./middlewares/admin');


var expressServer = function (config) {

  //keep reference to config
  this.config = config || {};

  /**
   * Create express app
   */
  this.expressServer = new express();

  // Middlewares - between express and routes
  for (var middleware in middlewares) {
    this.expressServer.use(middlewares[middleware]);
  }

  /**
  * Settings
  */
  // template engine
  this.expressServer.engine('html', swig.renderFile);
  this.expressServer.set('view engine', 'html');
  this.expressServer.set('views', __dirname + '/server/views/');
  swig.setDefaults({varControls: ['[[', ']]']}); // Para usar {} en Angular

  // development enviroment
  if (env === 'development') {
    console.log('OK NO HAY CACHE');
    this.expressServer.set('view cache', false);
    swig.setDefaults({cache: false, varControls:['[[',']]']});
  }

  // Routes
  this.expressServer.get('/article/save/', function (req, res, next ) {
    res.render('index', {nombre: 'Julian Vásquez'});
  });

  this.expressServer.get('/article/list/', function (req, res, next ) {
    res.render('articles/details', {});
  });

};

module.exports = expressServer;

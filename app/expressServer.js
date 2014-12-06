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
    middlewares = require('./middlewares/admin'),
    router = require('./server/router');


var ExpressServer = function (config) {

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

  // Dinamic Routes
  for (var controller in router){
    for (var classMethod in router[controller].prototype){
      var httpMethod = classMethod.split('_')[0];
      var httpVerb = classMethod.split('_')[1];
      var id = classMethod.split('_')[2];
      id = (httpMethod == 'get' && id !== undefined) ? ':id' : '';
      var url = '/' + controller + '/' + httpVerb + '/' + id;
      this.router(controller,classMethod,httpMethod,url);
    }
  }
};

ExpressServer.prototype.router = function(controller,classMethod,httpMethod,url) {
  console.log(url);
  this.expressServer[httpMethod](url, function(req,res,next){
    var config = {
      'classMethod':classMethod,
      'req': req,
      'res': res,
      'next': next
    };
    var Controller = new router[controller](config);
    Controller.response();
  });
};

module.exports = ExpressServer;

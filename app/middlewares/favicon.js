/* jslint node: true */
'use strict';

// Node dependences
/**
*  REQUIRES
*/

// related third party node_modules
var favicon = require('serve-favicon');

// node-modules specific requires
var path = require('path');

module.exports = favicon(path.join(__dirname, '../public/favicon.ico'));

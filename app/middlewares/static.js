/* jslint node: true */
'use strict';

// Node dependences
/**
*  REQUIRES
*/

// related third party node_modules
var express = require('express');

// node-modules specific requires
var path = require('path');

module.exports = express.static(path.join(__dirname, '../public/'));

/* jslint node: true */
'use strict';

var ArticleView = require('../views/articles/article');

var Article = function(config) {
  this.config = config || {};

  this.view = new ArticleView();

  this.response = function() {
    this[this.config.classMethod](this.config.req, this.config.res, this.config.next);
  };
};

Article.prototype.post_save = function(req, res, next) {
  debugger;
};


Article.prototype.get_create = function(req, res, next) {
  var object = {nombre: "create"};
  this.view.create(res, object);
};

Article.prototype.get_read = function(req, res, next) {
  var object = {nombre: "read"};
  this.view.read(res, object);
};

Article.prototype.get_home = function(req, res, next) {
  var object = {nombre: "home"};
  this.view.home(res, object);
};


module.exports = Article;

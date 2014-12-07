/* jslint node: true */
'use strict';

var Article = function(config) {
  this.config = config || {};

  this.response = function() {
    this[this.config.classMethod](this.config.req, this.config.res, this.config.next);
  };
};


Article.prototype.get_create = function(req, res, next) {
  res.send('La vista create');
};

Article.prototype.get_read = function(req, res, next) {
  res.send('La vista details');
};

Article.prototype.get_show = function(req, res, next) {
  res.render('articles/index');
};


module.exports = Article;

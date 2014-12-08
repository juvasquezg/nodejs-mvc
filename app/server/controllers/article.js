/* jslint node: true */
'use strict';

var Article = function(config) {
  this.config = config || {};

  this.response = function() {
    this[this.config.classMethod](this.config.req, this.config.res, this.config.next);
  };
};

Article.prototype.post_save = function(req, res, next) {
  debugger;
};


Article.prototype.get_create = function(req, res, next) {
  res.render('articles/create');
};

Article.prototype.get_read = function(req, res, next) {
  res.send('La vista details');
};

Article.prototype.get_show = function(req, res, next) {
  res.render('articles/index');
};


module.exports = Article;

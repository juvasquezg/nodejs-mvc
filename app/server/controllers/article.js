/* jslint node: true */
'use strict';

var Article = function(config) {
  this.config = config || {};

  this.response = function(){
    this[this.conf.classMethod](this.conf.req,this.conf.res,this.conf.next);
  };
};


Article.prototype.get_create = function(req, res, next) {
  res.send('La vista create');
};

Article.prototype.get_read = function(req, res, next) {
  res.send('La vista details');
};

module.exports = Article;

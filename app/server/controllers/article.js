/* jslint node: true */
'use strict';

var ArticleView = require('../views/articles/article'),
    ArticleModel = require('../models/article');

var Article = function(config) {
  this.config = config || {};

  this.view = new ArticleView();
  this.model = new ArticleModel();

  this.response = function() {
    this[this.config.classMethod](this.config.req, this.config.res, this.config.next);
  };
};

Article.prototype.post_save = function(req, res, next) {
  this.model.save(req.body, function(doc) {
		res.redirect('/article/read/' + doc.slug);
	});
};

Article.prototype.get_create = function(req, res, next) {
  var object = {nombre: "create"};
  this.view.create(res, object);
};

Article.prototype.get_read_id = function(req, res, next) {
  var object = {};
	var self = this;
	this.model.get({slug:req.params.id}, function(doc){
		object.article = doc[0];
		self.view.read(res, object);
	});
};

Article.prototype.get_home = function(req, res, next) {
  var object = {nombre: "home"};
  this.view.home(res, object);
};


module.exports = Article;

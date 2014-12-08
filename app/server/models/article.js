/* jslint node: true */
'use strict';

var modelArticle = require('./schema/article');
		//mongoose = require('mongoose');

var Article = function(config){
	this.config = config || {};
	this.model = modelArticle;
};

Article.prototype.save = function(data, callback) {
  this.model.findOneAndUpdate({
    title: data.title,
    slug: data.slug
  }, data, {upsert:true}).exec(function(err,doc) {
      callback(doc);
  });
};

Article.prototype.get = function(filters, callback) {
	this.model.find(filters).exec(function(err,doc) {
		callback(doc);
	});
};

module.exports = Article;

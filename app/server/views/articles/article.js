/* jslint node: true */
'use strict';

var Article = function (config) {
	this.config = config || {};
};

Article.prototype.create = function (res, object) {
	res.render('articles/create', object);
};

Article.prototype.read = function (res, object) {
	res.render('articles/details', object);
};

Article.prototype.home = function(res, object) {
	res.render('articles/index', object);
};

module.exports = Article;

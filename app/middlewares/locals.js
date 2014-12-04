/* jslint node: true */
'use strict';

// response locals
module.exports = function(req, res, next) {
    res.locals.user = {};
		res.locals.user.username = 'juvasquezg';
    next();
};

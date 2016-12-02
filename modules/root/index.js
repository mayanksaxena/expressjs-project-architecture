var routes = require("./root.route");

var root = function(app) {
	console.log("bloody root loaded");
	app.use('/', routes);
};
module.exports = root;
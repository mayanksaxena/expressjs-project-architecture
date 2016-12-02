var routes = require("./dashboard.route");

var dashboard = function(app) {
	console.log("bloody dashboard loaded");
	app.use('/dashboard', routes);
};
module.exports = dashboard;
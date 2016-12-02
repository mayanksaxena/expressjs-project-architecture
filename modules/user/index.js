var routes = require("./user.route");

var users = function(app) {
	console.log("bloody users loaded");
	app.use('/users', routes);
};
module.exports = users;
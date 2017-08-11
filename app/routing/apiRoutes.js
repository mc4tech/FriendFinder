//require the friends.js file
var friends = require("../data/friends.js");

//module function for api routes
module.exports = function(app) {

	//handles the route /api/friends to display the friends JSON data
	app.get("/api/friends", function(req, res) {
		res.header("JSON");
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {

	});
}
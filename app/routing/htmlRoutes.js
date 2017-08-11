//dependencies npm path
var path = require('path');

//routes
module.exports = function(app) {
	app.get('/survey', function(req, res) {
	    res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	//default link is home
	app.use(function(req, res) {
	    res.sendFile(path.join(__dirname, "/../public/home.html"));

	});

};
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
// var friendsJS = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = process.env.PORT || 8080;
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/public', express.static(path.join(__dirname, 'app/public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen((PORT), function() {
  console.log("App listening on PORT " + PORT);
});
// DEPENDENCIES
// list of packages 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// create an express server
var app = express();
// set iniial port
var PORT = process.env.PORT || 3000;
// set up express server to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// create a route path for
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);
// listen a server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

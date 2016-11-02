//  'get' route with the url /survey.
// default 'use' route  home.html
// dependencies
var path = require('path');

module.exports = function(app){ // app=express
// survey page
app.get('/survey', function(req, res){
res.sendFile(path.join(__dirname + '/../public/survey.html'));
});
// home page
app.use(function(req, res){
  res.sendFile(path.join(__dirname + '/../public/home.html'));
});

};
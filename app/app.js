var express = require('express');
var mongoose = require('mongoose');
var reload = require('reload');
var configFile = require('../config.json');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('appConfig', configFile)

app.use(express.static('app/public'));
app.use(require('./routes/index-route'));
app.set('view engine', 'ejs');
app.set('views', 'app/views');

var server = app.listen(app.get('port'), function(){
    console.log("listening on port " + app.get('port'));
});

reload(app);

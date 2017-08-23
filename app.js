var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var oauth = require('./routes/oauth');

var app = express();

// view engine setup


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/api/twit', oauth)



module.exports = app;

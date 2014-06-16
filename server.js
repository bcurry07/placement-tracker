var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/user');

//set environment variable to development by default
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//create express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


if(env === 'development') {
    //EDIT: change "untitled" to name of app root directory
    mongoose.connect('mongodb://localhost/untitled');
} else {
    //EDIT: mongolab.com hosted db connection string
    mongoose.connect('mongodb://bcurry:untitled@ds041188.mongolab.com:41188/untitled');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('db opened');
});

//EDIT: This is not generic code, it is app specific. Remove/replace as needed.
var messageSchema = mongoose.Schema({
    message: String
});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, doc) {
    mongoMessage = doc.message;
});



app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});

//creates a "catch-all" route that always serves up index page and leaves routing responsibility to client-side (caution: dangerous if routing is messed up)
//app.get('*', function(req, res) {
//    res.render('index');
//});

//This is the default route that comes with this file OOB. Routes users to index file when they hit the root url
//EDIT: mongoMessage is just sample data. Remove/replace as needed.
app.get('/', function(req, res) {
    res.render('index', {mongoMessage: mongoMessage});
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

//I created this but it should work standard for all apps
var port = process.env.PORT || 3000;
app.listen(port);

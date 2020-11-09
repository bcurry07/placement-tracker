var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//var routes = require('./routes/index');

var placementModel = require('./server/models/Placement');
var placements = require('./server/controllers/placements');

//set environment variable to development by default
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var login = process.env.PT_LOGIN;

//create express app
var app = express();

//implements basic HTTP authorization by enforcing credentials via browser login dialog
//auth is used below as middleware for routes and allows routing to placements.js functions to occur if credentials are correct
var auth = express.basicAuth(function(username, password) {
  return username === login && password === login;
});

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




//**************************************************************************



if(env === 'development') {
  //EDIT: change "untitled" to name of app root directory
  mongoose.connect('mongodb://localhost/untitled');
} else {
  // mongoose.connect('mongodb+srv://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PW + '@placements.tekqa.mongodb.net/placements?retryWrites=true&w=majority');
  //mongodb+srv://bcurry:<password>@placements.tekqa.mongodb.net/placements?retryWrites=true&w=majority

  var promise = mongoose.connect('mongodb+srv://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PW + '@placements.tekqa.mongodb.net/placements?retryWrites=true&w=majority', {
    useMongoClient: true,
  });
  console.log(process.env.MONGO_USERNAME);
  console.log( process.env.MONGO_PW);
  promise.then(function(db) {
    console.log('callback from the db');
  });
}


/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
  console.log('opening db');
db.once('open', function callback() {
  console.log('db opened');
});*/

placementModel.createDefaultPlacements();

//*****************************************************************************

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

app.get('/api/placements/:placementId', placements.getPlacement);

app.get('/api/placements', auth, placements.getPlacements);

app.put('/api/placements/:placementId', auth, placements.updatePlacement);

app.post('/api/placements', auth, placements.addPlacement);

app.get('/api/billingclients', auth, placements.getBillingClients);

app.delete('/api/placements/:placementId', auth, placements.deletePlacement); //auth middleware used to require credentials prior to delete function

app.all('/api/*', function(req, res) {
  res.send(404);
});

//creates a "catch-all" route that always serves up index page and leaves routing responsibility to client-side (caution: dangerous if routing is messed up)
//app.get('*', function(req, res) {
//    res.render('index');
//});

app.get('*', function(req, res) {
  res.render('index');
});














//******************************************************************************





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
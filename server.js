const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require("serve-favicon")

require('dotenv').config();
// Connect to the database
require('./config/database');

// const indexRouter = require('./routes/api/index');
// const usersRouter = require('./routes/api/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());

//------------------------------------------------
//importing tools needed for api
//------------------------------------------------
var cors = require('cors');
var inventoryRouter = require('./routes/api/inventoryitems')
//------------------------------------------------

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "build")));
app.use(require("./config/checkToken.js"));


//--------------------------------------
//app.use statements for api calls
//--------------------------------------
app.use(cors());
//--------------------------------------

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/inventoryitems', inventoryRouter);
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

module.exports = app;
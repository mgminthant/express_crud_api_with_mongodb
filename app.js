var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var db = require('./config/database');
var cors = require('cors');

var customLogger = require('./middleware/customLogger');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo')
var movieRouter = require('./routes/movie');
var reviewRouter = require('./routes/review')
var dummy = require('./routes/dummy');
const authMiddleware = require('./middleware/auth');

var app = express();
app.use(customLogger);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/todos', todoRouter);
app.use('/api/movies',authMiddleware,movieRouter)
app.use('/api/reviews',reviewRouter);
app.use('/api/dummy', dummy);

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

mongoose.connect(db.db,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log('MongoDB Connected!')).catch((err)=>{
  console.log(err)});

module.exports = app;

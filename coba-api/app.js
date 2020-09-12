var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/chatdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`You're connected to database server`))
    .catch((err) => console.error(err));


var indexRouter = require('./routes/index');
var chatsRouter = require('./routes/chats');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
app.use('/api/chats', chatsRouter);

module.exports = app;

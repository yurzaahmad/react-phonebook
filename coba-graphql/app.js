var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require("firebase");
const { graphqlHTTP } = require("express-graphql");
const cors = require('cors');

const config = {
    apiKey: "AIzaSyB-UXENccsB9fhI_kqfnnIlwzxLTSnU6J0",
    authDomain: "phone-books-ba05b.firebaseapp.com",
    databaseURL: "https://phone-books-ba05b.firebaseio.com",
    projectId: "phone-books-ba05b",
    storageBucket: "phone-books-ba05b.appspot.com",
    messagingSenderId: "962649828840"
};
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);

const userSchema = require('./graphql').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}));


module.exports = app;

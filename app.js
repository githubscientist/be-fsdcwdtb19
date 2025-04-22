// import the express module
const express = require('express');
const userRouter = require('./routes/userRoutes');
// const morgan = require('morgan');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');

const app = express();

// middleware to parse the request body
app.use(express.json());

// middleware to log all the requests using morgan
// app.use(morgan('dev'));

// middleware to log all the requests using custom logger
app.use(logger);

app.use('/users', userRouter);

// middleware to handle 404 errors
app.use(errorRoute);

module.exports = app;
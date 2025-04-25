// import the express module
const express = require('express');
const userRouter = require('./routes/userRoutes');
// const morgan = require('morgan');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const cookieParser = require('cookie-parser');
const customerRouter = require('./routes/customerRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const bookingRouter = require('./routes/bookingRoutes');

const app = express();

// middleware to parse the request body
app.use(express.json());

// middleware to parse the cookies
app.use(cookieParser());

// middleware to log all the requests using morgan
// app.use(morgan('dev'));

// middleware to log all the requests using custom logger
app.use(logger);

app.use('/api/users', userRouter);
app.use('/api/customers', customerRouter);
app.use('/api/services', serviceRouter);
app.use('/api/bookings', bookingRouter);

// middleware to handle 404 errors
app.use(errorRoute);

module.exports = app;
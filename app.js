// import the express module
const express = require('express');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use('/users', userRouter);

module.exports = app;
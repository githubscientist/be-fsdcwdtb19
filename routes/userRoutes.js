// import express module
const express = require('express');
const { register, login, logout, me } = require('../controllers/userController');

// create a router
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.get('/me', me);

// export the router
module.exports = userRouter;
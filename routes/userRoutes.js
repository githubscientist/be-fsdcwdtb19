// import express module
const express = require('express');
const { register, login, logout, me } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

// create a router
const userRouter = express.Router();

// Public routes
userRouter.post('/register', register);
userRouter.post('/login', login);

// Protected routes
// isAuthenticated middleware checks if the user is authenticated
userRouter.post('/logout', isAuthenticated, logout);
userRouter.get('/me', isAuthenticated, me);

// export the router
module.exports = userRouter;
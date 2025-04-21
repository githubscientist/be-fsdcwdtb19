// import express module
const express = require('express');
const { getAllUsers } = require('../controllers/userController');

// create a router
const userRouter = express.Router();

userRouter.get('/', getAllUsers);

// export the router
module.exports = userRouter;
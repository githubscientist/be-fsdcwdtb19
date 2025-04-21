// import express module
const express = require('express');

// create a router
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('GET: Hello Users!');
});

// export the router
module.exports = userRouter;
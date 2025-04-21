// import the express module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('GET: Hello Root');
});

module.exports = app;
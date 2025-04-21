// import the express module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// start the server
app.listen('3001', '127.0.0.1', () => {
    console.log(`Server is running @ http://127.0.0.1:3001`);
    console.log(`Press Ctrl + C to stop the server`);
});
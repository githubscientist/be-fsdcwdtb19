const app = require('./app');

// start the server
app.listen('3001', '127.0.0.1', () => {
    console.log(`Server is running @ http://127.0.0.1:3001`);
    console.log(`Press Ctrl + C to stop the server`);
});
const app = require('./app');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(`Error connecting to MongoDB: ${err.message}`);
    })

// start the server
app.listen('3001', () => {
    console.log(`Server is running @ http://127.0.0.1:3001`);
    console.log(`Press Ctrl + C to stop the server`);
});
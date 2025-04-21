// import the http module
const http = require('http');

// create a server object
const server = http.createServer((request, response) => {
    console.log('Request received');
    console.log(`Request URL: ${request.url}`);
    console.log(`Request Method: ${request.method}`);
    response.end('Hello World');
});

// start the server
server.listen(3001, '127.0.0.1', () => {
    console.log(`Server is running @ http://127.0.0.1:3001`);
    console.log('Press Ctrl+C to stop the server');
});
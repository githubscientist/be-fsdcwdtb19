// import the http module
const http = require('http');

// create a server object
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        if (request.method === 'GET') {
            response.end('GET: Root Route');
        } else if (request.method === 'POST') {
            response.end('POST: Root Route');
        } else if (request.method === 'PUT') {
            response.end('PUT: Root Route');
        } else if (request.method === 'DELETE') {
            response.end('DELETE: Root Route');
        }
    } else if (request.url === '/test') {
        if (request.method === 'GET') {
            response.end('GET: Test Route');
        } else if (request.method === 'POST') {
            response.end('POST: Test Route');
        } else if (request.method === 'PUT') {
            response.end('PUT: Test Route');
        } else if (request.method === 'DELETE') {
            response.end('DELETE: Test Route');
        }
    }
});

// start the server
server.listen(3001, '127.0.0.1', () => {
    console.log(`Server is running @ http://127.0.0.1:3001`);
    console.log('Press Ctrl+C to stop the server');
});
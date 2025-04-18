const { createServer } = require('http');

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello NodeJS!');
});

// starts a simple http server locally on port 3001
server.listen(3001, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3001');
});
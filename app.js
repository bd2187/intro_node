const http = require('http');

const hostName = 'localhost';
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test');
});

server.listen(port, hostName, function() {
    console.log(`Now listening to port: ${port}`);
});
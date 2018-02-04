const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

fs.readFile('index.html', (err, data) => {
    
    if (err) throw err;

    const server = http.createServer((req, res) => {
        
        if (req.url === '/') {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
            res.end();
        }
    });

    server.listen(port, host, () => {
        console.log(`Now listening to: ${host} ${port}`);
    });

});




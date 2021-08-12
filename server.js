const http = require('http');

const server = http.createServer((req, res) => {
  console.log('[', new Date(), ']', req.method, req.url);

  res.writeHead(200);
  res.end('Hello, world!');
});

server.listen(3000);

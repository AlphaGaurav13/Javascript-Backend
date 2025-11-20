const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hi there this Gaurav From Earth");
})

server.listen(3004);
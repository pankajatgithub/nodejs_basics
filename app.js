const http = require('http');
const routes= require('./route');
console.log(routes.sometext);
const server = http.createServer(routes);

server.listen(3000);
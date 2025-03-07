const http = require('http');
const routes= require('./route');
const { log } = require('console');
console.log(routes.sometext);
const server = http.createServer(routes.handler);
console.log("Hi");

server.listen(3000);
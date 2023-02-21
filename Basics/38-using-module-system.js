const http = require('http'); // ./ will be file based, without that will look for global which  node module provides
const request = require('./38-routes');
/** createServer method expects a function 
that would accepts incoming requests and can send response and returns
a server instance
*/
const server = http.createServer(request.handler);

server.listen(3000);


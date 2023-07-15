const http = require('http');

const routes = require('./routes');

//console.log(routes.someText);

const servera = http.createServer(routes.server);

servera.listen(4000);
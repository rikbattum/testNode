var http = require('http');


//console.log(http);

var server = http.createServer(function (request, response) {

    var url = request.url;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello world');
    response.write('you requested: ' + url);
    response.end();
});
server.listen(3000);
console.log('server started on port 3000');


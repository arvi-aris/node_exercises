var http = require('http');
var url = require('url');
 
function start(route) {
    var Onrequest = function(request, response) {
        var pathName = url.parse(request.url).pathname;
        route(pathName);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Server is up");
        response.end();
    };

    var server = http.createServer(Onrequest);
    server.listen(3000);
    console.log("Server has started.");
}

exports.start = start;

var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(req, res) {
        var pathName = url.parse(req.url).pathname;
        route(pathName);
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.write("Hello World");
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}

exports.start = start; 
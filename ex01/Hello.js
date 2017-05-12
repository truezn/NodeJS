var ohttp = require("http");
ohttp.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": 'text/html' });
    res.write("<h1>Node.js</h1>");
    res.end("<p>Happy New Year 2017!!!!</p>");
}).listen(3000);
console.log("Http server is listening at port 3000");

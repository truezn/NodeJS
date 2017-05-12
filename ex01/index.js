var server = require("./server");
var route  = require("./route");

server.start(route.route);
console.log(__filename);
console.log(__dirname);
console.log(global);

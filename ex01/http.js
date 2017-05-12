var http = require("http");

function fnHttpCallBack() {console.log("http call back")};

http.createServer(fnHttpCallBack).listen(8888);


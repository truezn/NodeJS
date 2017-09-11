
var fs = require('fs');
var fsCallBack = function (err,data) {

    if (err)
        {
            console.log(err); 
        }
    else
        {
            console.log('file is content.txt' + data);
        }
    
}

fs.readFile('content.txt','UTF-8',fsCallBack);
fs.readFile('content1.txt','utf-8', fsCallBack);

// 
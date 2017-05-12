var fs = require('fs');
fs.readFile("test.txt", "utf-8",
    function (err, data) {

        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }

    }
);

var content = "test write file";

fs.writeFile("test.txt", content,
    function (err) {
        if (err) {
            console.log(err);
        } else{
            console.log("ok");
        }
    });

fs.readFile("test.txt", "utf-8",
    function (err, data) {

        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }

    }
);

console.log(".end");
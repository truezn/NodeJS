var fs = require('fs');
var fsCallBack = function(err, data) {

    if (err) {
        console.log(err);
    } else {
        console.log('file is content.txt' + data);
    }

};

var fsCallBack2 = function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var oText = data.toString('utf-8');
        console.log(oText);
        // var oBuffer = data.from(text, 'utf-8');
        // console.log(oBuffer);
    }

};
// fs.readFile('content.txt', 'UTF-8', fsCallBack);
// fs.readFile('content1.txt', 'utf-8', fsCallBack);
// fs.readFile('capture.png', fsCallBack2);
// var data = fs.readFileSync('content.txt', 'utf-8');
// console.log(data);

// try {
//     var data2 = fs.readFileSync('content1.txt', 'utf-8');
// } catch (err) {
//     console.log(err);
// }
// var sContentTxt = "write by ning";
// var fsWCallBack = function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok');
//     }

// };


fs.readFile('content.txt', 'UTF-8', fsCallBack);
fs.readFile('content1.txt', 'utf-8', fsCallBack);

fs.writeFile('content.txt', sContentTxt, fsWCallBack);
var data3 = fs.readFileSync('content.txt', 'utf-8');
console.log("data3 is" + data3);
var queryString = require("querystring");
var obj = {
    name:"zhangning", 
    age:"34", 
    jender:"male",
    skill:["sap","js","nodejs","jquery"]
}

var sqString = queryString.stringify(obj);
console.log("stringify");
console.log(sqString);
var anti = queryString.parse(sqString);
console.log("parse");
console.log(anti);
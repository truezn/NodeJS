var url = require("url");
var sURl = "http://www.taobao.com";
var obj = url.parse(sURl);
console.log("parse function");
console.log(obj);
// result
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.taobao.com',
  port: null,
  hostname: 'www.taobao.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://www.taobao.com/' }
*/
var sURl1 = url.format({
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.taobao.com',
    port: null,
    hostname: 'www.taobao.com',
    hash: null,
    search: null,
    query: null,
    pathname: '/',
    path: '/',
    href: 'http://www.taobao.com/'
});
console.log("format function");
console.log(sURl1);
// result 
// http://www.taobao.com/

var sURL01 = "http://www.taobao.com"; 
var sURL02 = "/myuser"; 
var sURLResult = url.resolve(sURL01,sURL02);
console.log("resolve function");
console.log(sURLResult);
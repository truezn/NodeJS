"use strict";

var fs = require("fs");

var rs = fs.createReadStream("content.txt", "utf-8");
var ws = fs.createWriteStream("content02.txt", "utf-8");

rs.pipe(ws);
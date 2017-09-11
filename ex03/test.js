var fn = function(params) {
    console.log("nextTick is triggered");
};
var fnExit = function(params) {
    console.log("process will exit");
};

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
process.nextTick(fn);
process.on("exit", fnExit);
console.log("instant run");
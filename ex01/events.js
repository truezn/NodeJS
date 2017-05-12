// To learn the event of node js 
var evt = require('events');
var evtEmitter = new evt.EventEmitter();
var fnEvtHandler = function evtHand(oEvt) {
    console.log("hello, i am an eventemitter");
};
evtEmitter.on("triggerEvent", fnEvtHandler);
setTimeout(function() {
    evtEmitter.emit("triggerEvent");
},1000);

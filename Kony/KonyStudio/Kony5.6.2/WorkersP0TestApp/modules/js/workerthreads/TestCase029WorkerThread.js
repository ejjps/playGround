//worker

//workers inner scope

kony.print("Worker Scope: Init");

//error handler
var evtErrorHandler_1 = function(event) {
	kony.print("Worker scope: In error handler 1");
	kony.print('Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
};

self.addEventListener("error", evtErrorHandler_1);

//import - empty call
importScripts();


kony.print("Worker Scope: Loading done");


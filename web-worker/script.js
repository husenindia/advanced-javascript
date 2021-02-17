function processMessage(message) {
    // Create worker    
    var worker = new Worker('./script.js');
    var deferred = $.Deferred();
    var startTime = new Date().toTimeString();

    // Receive
    worker.onmessage = function(e) {
        deferred.resolve(message + ' ' + startTime);
    }

    return deferred.promise();
}

self.onmessage = function(e) {
    var messageObject = e.data;
    var message = messageObject.message;
    sleep(2000);
    self.postMessage(message + ' Processed');
}

// OPTIONAL DEMO SLEEP FUNCTION TO SET INTERVAL
function sleep(ms) {
    var startTime = new Date().getTime();
    var stopTime = startTime + 2000;
    while(stopTime >= new Date().getTime()){}
}
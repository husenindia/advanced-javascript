self.onmessage = function(e) {
    var messageObject = e.data;
    var message = messageObject.message;
    sleep(2000);
    if(messageObject.status==="Start") {
        self.postMessage('Started');
    } else {
        self.postMessage(message + ' Processed');
    }
}
function sleep(ms) {
    var startTime = new Date().getTime();
    var stopTime = startTime + 2000;
    while(stopTime >= new Date().getTime()){}
}
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Perform a new action!');
}

//Assign the eventhandler to an event:
eventEmitter.on('action', myEventHandler);

//Fire the 'action' event:
eventEmitter.emit('action');

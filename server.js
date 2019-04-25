const express = require('express');
const findParams = require('./findParams');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
var EventEmitter2 = require('eventemitter2').EventEmitter2;
var server = new EventEmitter2({

  //
  // set this to `true` to use wildcards. It defaults to `false`.
  //
  wildcard: true,

  //
  // the delimiter used to segment namespaces, defaults to `.`.
  //
  delimiter: '::', 
  
  //
  // set this to `true` if you want to emit the newListener event. The default value is `true`.
  //
  newListener: false, 

  //
  // the maximum amount of listeners that can be assigned to an event, default 10.
  //
  maxListeners: 20,
  
  //
  // show event name in memory leak message when more than maximum amount of listeners is assigned, default false
  //
  verboseMemoryLeak: false
});

server.on('foo.*', function(value1, value2) {
	console.log(this.event, value1, value2);
  });
  
const app = express();

const port = process.env.PORT || 8080;

app.get('/', findParams.findParams);

app.listen(port, () => {
	console.log('Our app is running on http://localhost:' + port);
});
const express = require('express');
const findParams = require('./findParams');


// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// const EventEmitter2 = require('eventemitter2').EventEmitter2;

// const server = new EventEmitter2({
//   wildcard: true,
//   delimiter: '::',
//   newListener: false,
//   maxListeners: 20,
//   verboseMemoryLeak: false
// });

// server.on('foo.*', function(value1, value2) {
// 	console.log(this.event, value1, value2);
//   });
  
const app = express();

const port = process.env.PORT || 8080;

app.get('/', findParams.findParams);

app.listen(port, () => {
	console.log('Our app is running on http://localhost:' + port);
});